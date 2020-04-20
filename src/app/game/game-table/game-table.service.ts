import { Injectable } from '@angular/core';
import { IRound } from '../interface/iround';
import { IBot } from '../interface/ibot';
import { ITabRow } from './game-table.component';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IRounds } from '../interface/irounds';
import { Observable } from 'rxjs';
import { share, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameTableService {
  
  private gameDataSet: Observable<IRounds>;
  private gameId: number;

  constructor(private http: HttpClient) {}

  public getData(gameId: number): Observable<IRounds> {
    if (this.gameDataSet == null || this.gameId != gameId) {
      this.gameId = gameId;
      let path: string = environment.url + `games/${gameId}.json`;
      this.gameDataSet = this.http.get<IRounds>(path).pipe(take(1), share());
    }
    return this.gameDataSet;
  }

  public map(dataSet: IRound[], botOrder: number): ITabRow[] {
    let tabDataSet: ITabRow[] = [];

    dataSet.forEach((element) => {
      let row: ITabRow = {
        round: null,
        time: null,
        points: null,
        used: null,
        winner: null,
      };
      let bot: IBot = botOrder == 1 ? element.BOT_1 : element.BOT_2;

      row.round = element.ROUND;
      row.time = bot.TIME;
      row.points = bot.POINTS;
      row.used = bot.USED;
      row.winner = element.WINNER == bot.NAME;
      tabDataSet.push(row);
    });

    return tabDataSet;
  }
}
