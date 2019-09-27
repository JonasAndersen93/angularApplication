import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IPlayer} from '../player/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerListService {
  private apiUrl = 'http://localhost:8081/api/players';

  constructor(private httpClient: HttpClient) { }

getPlayers(): Observable<IPlayer[]> {
  return this.httpClient.get<IPlayer[]>(this.apiUrl).pipe(
    catchError(this.handleError)
  );
}

private handleError(err: HttpErrorResponse) {
  return throwError("Fejl");
}
}

