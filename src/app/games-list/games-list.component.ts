import { Component, OnInit} from '@angular/core';
import {IGame} from './game';
import {GamesListService} from './games-list.service';

@Component({
  selector: 'app-games',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  filtered : string = '';
  sayHello: boolean = false;

  games: IGame[];
  errorMessage: string;
  /*games : IGame[] = [
    {
      "id" : 1,
      "name" : "TestGame",
      "imgUrl": "/assets/images/fck.png"
    }
  ];*/

  toggleButton(): void {
    this.sayHello = !this.sayHello;
  }

  constructor(private gameService : GamesListService) { }

  ngOnInit() {
    this.gameService.getGame().subscribe({
      next: games => this.games = games,
      error: err => this.errorMessage = err
      }
    );

  }

}
