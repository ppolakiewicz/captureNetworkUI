import {Component, Input, OnInit} from '@angular/core';
import {ChartService} from '../chart.service';
import {ChartDataSets, ChartType, RadialChartOptions} from 'chart.js';

@Component({
  selector: 'app-round-won-by',
  templateUrl: './round-won-by.component.html',
  styleUrls: ['./round-won-by.component.scss']
})
export class RoundWonByComponent implements OnInit {

  @Input() readonly gameId: number;

  readonly chartType: ChartType = 'radar';
  readonly chartLabels: string[] = ['EXPLOIT()', 'INFECT()', 'NOP()', 'OVERHEAR()', 'OVERLOAD()', 'PATCH()', 'SCAN()'];
  readonly chartOptions: RadialChartOptions = {
    responsive: true
  };

  chartData: ChartDataSets[] = [];

  constructor(private readonly service: ChartService) {
  }

  ngOnInit(): void {
    this.service.getWonWithMethods(this.gameId)
      .subscribe(bot => this.chartData.push(this.service.prepareWithMethodChartData(bot)));
  }

}
