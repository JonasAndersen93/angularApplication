import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerListComponent} from './player-list/player-list.component';
import {GamesListComponent} from './games-list/games-list.component';

const routes: Routes = [
  { path: 'players', component: PlayerListComponent},
  { path: 'games', component: GamesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PlayerListComponent, GamesListComponent];
