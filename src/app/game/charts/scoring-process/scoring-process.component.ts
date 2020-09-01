import {Component, Input, OnInit} from '@angular/core';
import {IGameRound} from '../../interfaces/igame-round';
import {ChartData} from '../charts.types';
import {ChartService} from '../chart.service';
import {ChartDataSets, ChartOptions} from 'chart.js';

@Component({
  selector: 'app-scoring-process',
  templateUrl: './scoring-process.component.html',
  styleUrls: ['./scoring-process.component.scss']
})
export class ScoringProcessComponent implements OnInit {

  @Input() gameHistory: IGameRound[];

  readonly firstBotData: ChartData = {data: [], label: ''};
  readonly secondBotData: ChartData = {data: [], label: ''};

  readonly chartData: ChartDataSets[] = [this.firstBotData, this.secondBotData];
  readonly chartType = 'line';
  readonly chartOptions: ChartOptions = {responsive: true};
  readonly chartLabels: string[] = [];

  constructor(private readonly service: ChartService) {
  }

  ngOnInit(): void {
    this.firstBotData.label = this.gameHistory[0].bot_1.name;
    this.secondBotData.label = this.gameHistory[0].bot_2.name;
    this.service.prepareScoringProcessData(this.gameHistory, this.firstBotData, this.secondBotData, this.chartLabels);
  }

}
