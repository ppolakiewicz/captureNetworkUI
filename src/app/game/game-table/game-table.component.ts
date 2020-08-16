import {Component, Input, OnInit} from '@angular/core';
import {GameTableDataSource} from './game-table.datasource';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss'],
})
export class GameTableComponent implements OnInit {

  @Input()
  firstBotName: string;
  @Input()
  secondBotName: string;
  @Input()
  gameId: number;

  public dataSource: GameTableDataSource;
  public displayedColumns: string[] = [
    'round',
    'firstBot-bot1_points', 'firstBot-bot1_time', 'firstBot-bot1_used',
    'secondBot-bot2_points', 'secondBot-bot2_time', 'secondBot-bot2_used'
  ];

  constructor(private service: GameService) {}

  ngOnInit(): void {
    this.dataSource = new GameTableDataSource(this.gameId, this.service);
  }
}
