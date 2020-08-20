import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartType, RadialChartOptions} from 'chart.js';
import {ChartService} from '../chart.service';

@Component({
  selector: 'app-round-lost-by',
  templateUrl: './round-lost-by.component.html',
  styleUrls: ['./round-lost-by.component.scss']
})
export class RoundLostByComponent implements OnInit {

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
    this.service.getLostWithMethods(this.gameId)
      .subscribe(bot => this.chartData.push(this.service.prepareWithMethodChartData(bot)));
  }
}
