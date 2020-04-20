import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IRound } from '../interface/iround';
import { GameTableService } from './game-table.service';
import { Method } from '../interface/enums/method.enum';
import { IRounds } from '../interface/irounds';

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
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {

  @Input() gameId: number;
  @Input() botOrder: number;

  public botName: string;
  public tableDataSource: ITabRow[];
  public displayedColumns = ['round', 'time', 'points', 'used', 'winner'];

  constructor(private service: GameTableService) { }

  ngOnInit(): void {
    this.service.getData(this.gameId).subscribe((data: IRounds) => {
      this.botName = this.getBotName(data, this.botOrder);
      this.tableDataSource = this.service.map(data.ROUNDS, this.botOrder);
    });
  }

  public getBotName(rounds: IRounds, botId: number): string {
    return botId == 1 ? rounds.ROUNDS[0].BOT_1.NAME : rounds.ROUNDS[0].BOT_2.NAME;
  }

}
