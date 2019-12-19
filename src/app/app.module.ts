import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesService } from './games/games.service';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddPlayerComponent } from './players/add-player/add-player.component';
import {PlayerService} from './players/player.service';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { PlayerImageComponent } from './players/player-image/player-image.component';


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
    GamesService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
