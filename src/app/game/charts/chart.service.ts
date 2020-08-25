import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {WonWithMethods} from './charts.types';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private readonly WON_WITH_METHODS = 'won_with_methods.json';

  constructor(private readonly http: HttpClient) {
  }

  private static getStatsPath(gameId: number): string {
    return `${environment.url}/games/${gameId}/stats`;
  }

  getWonWithMethods(gameId: number): Observable<WonWithMethods[]> {
    return this.http.get<WonWithMethods[]>(`${ChartService.getStatsPath(gameId)}/${this.WON_WITH_METHODS}`);
  }
}
