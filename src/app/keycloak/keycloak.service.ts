import {Injectable} from '@angular/core';
import { User } from '../models/user.model';
import { AppConfig } from '../app.config';
declare var Keycloak: any;

@Injectable()
export class KeycloakService {
  static auth: any = {};
  static user: User;
  static init(): Promise<any> {
    const keycloakAuth: any = Keycloak({
      url: AppConfig.settings.auth.SSO_SERVER,
      realm: AppConfig.settings.auth.SSO_REALM,
      clientId: AppConfig.settings.auth.SSO_CLIENT
    });
    KeycloakService.auth.loggedIn = false;
    return new Promise((resolve, reject) => {
      keycloakAuth
        .init({ onLoad: 'login-required' })
        .success(() => {
          KeycloakService.auth.loggedIn = true;
          KeycloakService.auth.authz = keycloakAuth;
          KeycloakService.auth.logoutUrl =
            keycloakAuth.authServerUrl +
            '/realms/' +
            AppConfig.settings.auth.SSO_REALM +
            '/protocol/openid-connect/logout?redirect_uri=' +
            document.baseURI;
          KeycloakService.auth.authz.loadUserProfile().success(data => {
            KeycloakService.user = new User();
            KeycloakService.user.username = data.username;
            KeycloakService.user.firstName = data.firstName;
            KeycloakService.user.lastName = data.lastName;
            KeycloakService.user.email = data.email;
            resolve();
          });
        })
        .error(() => {
          reject();
        });
    });
  }
  hasAnyRole(roles: String[]): boolean {
    for (let i = 0; i < roles.length; i++) {
      if (this.hasRole(roles[i])) {
        return true;
      }
    }
    return false;
  }
  hasRole(role: String): boolean {
    return KeycloakService.auth.authz.hasResourceRole(role);
  }
  logout() {
    console.log('*** LOGOUT');
    KeycloakService.auth.loggedIn = false;
    KeycloakService.auth.authz = null;
    window.location.href = KeycloakService.auth.logoutUrl;
  }
  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz
          .updateToken(90) // refresh token if it will expire in 90 seconds or less
          .success(() => {
            resolve( <string> KeycloakService.auth.authz.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      } else {
        reject('Not logged in');
      }
    });
  }
  getUser(): User {
    return KeycloakService.user;
  }
}
