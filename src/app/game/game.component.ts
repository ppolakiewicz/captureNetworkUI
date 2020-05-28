import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from './game.service';
import { IGameRound } from './interfaces/igame-round';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {

  public dataSource: IGameRound[] = [];
  public cols: any[] = [
    { field: 'round', header: 'Round' },
    { field: 'bot_1', subField: 'points', header: 'Points' },
    { field: 'bot_1', subField: 'time', header: 'Time' },
    { field: 'bot_1', subField: 'used', header: 'Used' },
    { field: 'bot_2', subField: 'points', header: 'Points' },
    { field: 'bot_2', subField: 'time', header: 'Time' },
    { field: 'bot_2', subField: 'used', header: 'Used' }
  ];

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
      this.service.getGameRounds(+params.get('id')).subscribe(
        (data: IGameRound[]) => this.dataSource = data
      )
    );
  }
}
