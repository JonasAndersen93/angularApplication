import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {IPlayer} from './playerInterface';
import {IGame} from '../games/game';
import {Player} from './players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:8081/api/players';
  private postOurl = 'http://localhost:8081/api/player/add';

  constructor(private httpClient: HttpClient) { }

getPlayers(): Observable<IPlayer[]> {
  return this.httpClient.get<IPlayer[]>(this.apiUrl).pipe(
    catchError(this.handleError)
  );
}
  getPlayer(id: number | string) {
    return this.getPlayers().pipe(
      map((players: IPlayer[]) => players.find(player => player.id === +id))
    );
  }
  addPlayer (player: Player): Observable<any> {
    return this.httpClient.post<Player>(this.postOurl, player)
      .pipe(
        catchError(this.handleError)
      );
  }



private handleError(err: HttpErrorResponse) {
  return throwError("Fejl");
}
}

