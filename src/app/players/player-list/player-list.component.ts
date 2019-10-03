import { Component, OnInit } from '@angular/core';
import {IPlayer} from '../playerInterface';
import {PlayerService} from '../player.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  public players: IPlayer[];
  errorMessage: string;

  constructor(private playerListService: PlayerService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.playerListService.getPlayers().subscribe({
        next: players => this.players = players,
        error: err => this.errorMessage = err
      }
    );
  }
  showPlayerDetail(player) {
    //this.router.navigate(['/players', player.id]);
    this.router.navigate([player.id], {relativeTo: this.activatedRoute});
  }

}
