import {Component, Input, OnInit} from '@angular/core';
import {IGameRound} from '../interfaces/igame-round';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss'],
})
export class GameTableComponent implements OnInit {

  @Input() dataSource: IGameRound[];
  @Input() firstBotName: string;
  @Input() secondBotName: string;

  public displayedColumns: string[] = [
    'round',
    'firstBot-bot1_points', 'firstBot-bot1_time', 'firstBot-bot1_used',
    'secondBot-bot2_points', 'secondBot-bot2_time', 'secondBot-bot2_used'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
