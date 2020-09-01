import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {ChartData, WithMethods} from './charts.types';
import {concatAll, skip} from 'rxjs/operators';
import {IGameRound} from '../interfaces/igame-round';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private readonly WON_WITH_METHODS = 'won_with_methods.json';
  private readonly LOST_WITH_METHODS = 'lost_with_methods.json';

  constructor(private readonly http: HttpClient) {
  }

  private static getStatsPath(gameId: number): string {
    return `${environment.url}/games/${gameId}/stats`;
  }

  prepareWithMethodChartData(bot: WithMethods): ChartData {
    const result: ChartData = {data: [], label: ''};
    result.label = bot.NAME;
    Object.entries(bot.STATISTICS).forEach(([key, value]) => result.data.push(value));
    return result;
  }

  prepareScoringProcessData(gameData: IGameRound[], firstBot: ChartData, secondBot: ChartData, chartLabels: string[]) {
    let i = 0;
    gameData.forEach(round => {
      firstBot.data.push(round.bot_1.points);
      secondBot.data.push(round.bot_2.points);
      chartLabels.push(String(++i));
    });
  }

  getWonWithMethods(gameId: number): Observable<WithMethods> {
    return this.getWithMethods(gameId, this.WON_WITH_METHODS);
  }

  getLostWithMethods(gameId: number): Observable<WithMethods> {
    return this.getWithMethods(gameId, this.LOST_WITH_METHODS);
  }

  private getWithMethods(gameId: number, fileName: string): Observable<WithMethods> {
    const path = `${ChartService.getStatsPath(gameId)}/${fileName}`;
    return this.http.get<WithMethods[]>(path)
      .pipe(concatAll())
      .pipe(skip(1));
  }
}
