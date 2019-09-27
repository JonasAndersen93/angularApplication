import { Component, OnInit } from '@angular/core';
import {GamesListService} from '../games-list/games-list.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(service : GamesListService) { }

  ngOnInit() {
  }

}
