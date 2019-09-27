import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IGame} from './game';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'http://localhost:8081/api/sso/hello';

/*getGame(): IGame[]{
    return;
}*/

  constructor(private httpClient: HttpClient) {

  }
  getHame(): Observable<IGame[]> {
    return this.httpClient.get<IGame[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

    private handleError(err: HttpErrorResponse) {
      return throwError("Fejl");
    }
}
