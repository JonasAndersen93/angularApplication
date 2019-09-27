import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses/courses.service';
import { GameComponent } from './game/game.component';
import { GameService } from './games/game.service';
import { GamesComponent } from './games/games.component';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    GameComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService
    //GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
