import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from './game.service';
import { ITabRow } from './game-table/game-table.component';
import { IRounds } from './interface/irounds';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public bot1Stats: ITabRow[];
  public bot2Stats: ITabRow[];

  public bot1Name: string;
  public bot2Name: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GameService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>
      this.service.getGameData(+params.get('id')).subscribe((data: IRounds) => {
        this.bot1Name = data.ROUNDS[0].BOT_1.NAME;
        this.bot2Name = data.ROUNDS[0].BOT_2.NAME;

        this.bot1Stats = this.service.getFirstBotStats(data.ROUNDS);
        this.bot2Stats = this.service.getSecondBotStats(data.ROUNDS);
      })
    );
  }
}
