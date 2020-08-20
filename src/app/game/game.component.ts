import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {

  firstBotName: string;
  secondBotName: string;
  gameId: number;

  constructor(private readonly route: ActivatedRoute,
              private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => this.gameId = +params.id);

    this.route.queryParams.subscribe(params => {
      this.firstBotName = params.bot1;
      this.secondBotName = params.bot2;
    });
  }
}
