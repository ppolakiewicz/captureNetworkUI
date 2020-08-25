import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IGameDescription } from './interfaces/igame-description';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainMenuService {
  constructor(private http: HttpClient) {}

  getGamesList(): Observable<IGameDescription[]> {
    const path = `${environment.url}/game_list.json`;
    return this.http.get<IGameDescription[]>(path);
  }
}
