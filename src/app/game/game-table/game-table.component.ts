import { Component, OnInit, Input } from '@angular/core';
import { Method } from '../interface/enums/method.enum';

export interface ITabRow {
  round: string;
  time: number;
  points: number;
  used: Method;
  winner: boolean;
}

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss'],
})
export class GameTableComponent implements OnInit {
  @Input() dataSource: ITabRow[];
  @Input() botName: string;

  public displayedColumns = ['round', 'time', 'points', 'used', 'winner'];

  constructor() {}

  ngOnInit(): void {}
}
