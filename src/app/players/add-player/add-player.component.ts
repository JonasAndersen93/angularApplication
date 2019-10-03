import { Component, OnInit } from '@angular/core';
import { Player } from '../players';
import {PlayerService} from '../player.service';
import {IPlayer} from '../playerInterface';

@Component({
  selector: 'app-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
  }
  player = new Player('test'); // defualt/placeholder value

  add(name: string): void {
    console.log(name);
    name : name.trim();
    if(!name) {
      return;
    }
    const newPlayer: Player = { name } as Player;
    this.playerService
      .addPlayer(newPlayer)
      .subscribe();
  }
}
