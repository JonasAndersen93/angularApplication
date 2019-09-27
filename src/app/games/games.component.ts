import { Component, OnInit} from '@angular/core';
import {IGame} from './game';
import {GameService} from './game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

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

  constructor(private gameService : GameService) { }

  ngOnInit() {
    this.gameService.getHame().subscribe({
      next: games => this.games = games,
      error: err => this.errorMessage = err
      }
    );

  }

}
