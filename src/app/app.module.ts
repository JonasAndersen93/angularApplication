import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesService } from './games/games.service';
import {FormsModule, NgForm} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AddPlayerComponent } from './players/add-player/add-player.component';
import {PlayerService} from './players/player.service';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { PlayerImageComponent } from './players/player-image/player-image.component';
import {AppConfig} from './app.config';
import {KeycloakService} from './keycloak/keycloak.service';
import {KEYCLOAK_HTTP_PROVIDER} from './keycloak/keycloak.http';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load().then(KeycloakService.init);
}

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    routingComponents,
    PlayerImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppConfig,
    //KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig, KeycloakService], multi: true
    },
    KEYCLOAK_HTTP_PROVIDER,
    GamesService,
    PlayerService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
