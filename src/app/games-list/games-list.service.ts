import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IGame} from './game';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesListService {

  private apiUrl = 'http://localhost:8081/api/sso/hello';

/*getGame(): IGame[]{
    return;
}*/

  constructor(private httpClient: HttpClient) {

  }
  getGames(): Observable<IGame[]> {
    return this.httpClient.get<IGame[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }
  getGame(id: number | string) {
    return this.getGames().pipe(
      map((games: IGame[]) => games.find(game => game.id === +id))
    );
  }
  /*
  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id))
    );
  }
   */

    private handleError(err: HttpErrorResponse) {
      return throwError("Fejl");
    }
}
