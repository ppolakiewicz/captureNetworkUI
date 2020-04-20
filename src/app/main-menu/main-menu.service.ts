import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGames } from './interfaces/igames'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor(private http: HttpClient) { }

  getGamesList() {
    let path: string = environment.url + 'game_list.json';
    return this.http.get<IGames>(path);
  }
}
