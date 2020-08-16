import {DataSource} from '@angular/cdk/table';
import {IGameRound} from '../interfaces/igame-round';
import {Observable} from 'rxjs';
import {GameService} from '../game.service';

export class GameTableDataSource extends DataSource<IGameRound> {

  constructor(private gameId: number,
              private gameService: GameService) {
    super();
  }

  connect(): Observable<readonly IGameRound[]> {
    return this.gameService.getGameRounds(this.gameId);
  }

  disconnect(): void {
  }
}
