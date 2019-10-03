import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesListService } from './games-list/games-list.service';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddPlayerComponent } from './players/add-player/add-player.component';
import {PlayerService} from './players/player.service';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    routingComponents,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GamesListService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
