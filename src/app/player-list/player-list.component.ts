import { Component, OnInit } from '@angular/core';
import {IPlayer} from '../player/player';
import {PlayerListService} from './player-list.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: IPlayer[];
  errorMessage: string;

  constructor(private playerListService: PlayerListService) {
  }

  ngOnInit() {
    this.playerListService.getPlayers().subscribe({
        next: players => this.players = players,
        error: err => this.errorMessage = err
      }
    );
  }

}
