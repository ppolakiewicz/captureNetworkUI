import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGameRound } from './interfaces/igame-round';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  public getGameRounds(gameId: number): Observable<IGameRound[]> {
    let path: string = environment.url + `games/${gameId}.json`;
    return this.http.get<IGameRound[]>(path);
  }
}
