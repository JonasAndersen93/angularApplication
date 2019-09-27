import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses/courses.service';
import { GameComponent } from './game/game.component';
import { GamesListService } from './games-list/games-list.service';
import { GamesListComponent } from './games-list/games-list.component';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PlayerComponent } from './player/player.component';
import {PlayerListService} from './player-list/player-list.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    GameComponent,
    PlayerComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    GamesListService,
    PlayerListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
