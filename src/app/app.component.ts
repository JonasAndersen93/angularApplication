import {Component, OnInit} from '@angular/core';
import {KeycloakService} from './keycloak/keycloak.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute, private keycloakService: KeycloakService){

  }
  ngOnInit() {

  }
  public isAdmin(): boolean {
    return this.keycloakService.hasAnyRole(['api']);
  }
}
