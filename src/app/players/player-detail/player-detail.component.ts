import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PlayerListComponent} from '../player-list/player-list.component';
import {IPlayer} from '../playerInterface';
import {PlayerService} from '../player.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  player$: Observable<IPlayer>;
  parentParam : boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.player$ = this.activatedRoute.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.playerService.getPlayer(params.get('id')))
    );
  }
  gotoPlayers(){
    //this.router.navigate(['/players']);
    this.router.navigate(['../'],{relativeTo : this.activatedRoute} );
  }

}
