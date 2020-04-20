import { Component, OnInit } from '@angular/core';
import { MainMenuService } from './main-menu.service';
import { IGames } from './interfaces/igames';
import { IGameDescription } from './interfaces/igame-description';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  public gameList: IGameDescription[];

  constructor(private menuService: MainMenuService) {
  }

  ngOnInit(): void {
    this.menuService.getGamesList().subscribe((data: IGames) => this.gameList = data.GAMES);
  }

}
