import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IPlayer} from '../../players/playerInterface';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PlayerService} from '../../players/player.service';
import {switchMap} from 'rxjs/operators';
import {IGame} from '../game';
import {GamesService} from '../games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game$: Observable<IGame>;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private gameService: GamesService) { }

  ngOnInit() {
    this.game$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.gameService.getGameById(params.get('id')))
    );
  }

  gotoGames(){
    //this.router.navigate(['/players']);
    this.router.navigate(['../'],{relativeTo : this.activatedRoute} );
  }
}
