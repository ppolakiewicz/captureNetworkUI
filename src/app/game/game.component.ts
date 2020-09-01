import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IGameRound} from './interfaces/igame-round';
import {GameService} from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {

  gameId: number;
  firstBotName: string;
  secondBotName: string;
  gameHistory: IGameRound[];

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly service: GameService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.gameId = params.id;
        this.service.getGameRounds(this.gameId).subscribe(
          gameHistory => {
            this.gameHistory = gameHistory;
            this.firstBotName = this.gameHistory[0].bot_1.name;
            this.secondBotName = this.gameHistory[0].bot_2.name;
          });
      });
  }
}
