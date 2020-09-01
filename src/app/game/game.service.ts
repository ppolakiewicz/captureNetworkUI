import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IGameRound} from './interfaces/igame-round';
import {environment} from '../../environments/environment';
import {share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getGameRounds(gameId: number): Observable< IGameRound[]> {
    const path = `${environment.url}/games/${gameId}/game_record.json`;
    return this.httpClient.get<IGameRound[]>(path).pipe(share());
  }
}
