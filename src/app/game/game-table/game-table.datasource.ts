import {DataSource} from '@angular/cdk/table';
import {IGameRound} from '../interfaces/igame-round';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

export class GameTableDataSource extends DataSource<IGameRound> {

  constructor(private gameId: number,
              private http: HttpClient) {
    super();
  }

  connect(): Observable<readonly IGameRound[]> {
    const path: string = environment.url + 'games/' + this.gameId + '/game_record.json';
    return this.http.get<IGameRound[]>(path);
  }

  disconnect(): void {
  }
}
