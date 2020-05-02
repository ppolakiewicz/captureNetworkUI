import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRounds } from './interface/irounds';
import { environment } from 'src/environments/environment';
import { ITabRow } from './game-table/game-table.component';
import { IRound } from './interface/iround';
import { IBot } from './interface/ibot';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  public getGameData(gameId: number): Observable<IRounds> {
    let path: string = environment.url + `games/${gameId}.json`;
    return this.http.get<IRounds>(path);
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
      row.winner = element.WINNER == botOrder;
      tabDataSet.push(row);
    });

    return tabDataSet;
  }
}
