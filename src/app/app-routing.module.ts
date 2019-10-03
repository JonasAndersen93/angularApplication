import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerListComponent} from './players/player-list/player-list.component';
import {GamesListComponent} from './games-list/games-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PlayerDetailComponent} from './players/player-detail/player-detail.component';
import {AddPlayerComponent} from './players/add-player/add-player.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainPageComponent},
  { path: 'players', component: PlayerListComponent},
  { path: 'players/:id', component: PlayerDetailComponent},
  { path : 'add-players', component: AddPlayerComponent},
  { path: 'games', component: GamesListComponent},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainPageComponent, PlayerListComponent, PlayerDetailComponent, AddPlayerComponent,
  GamesListComponent, PageNotFoundComponent];
