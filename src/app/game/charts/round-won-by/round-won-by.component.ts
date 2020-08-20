import {Component, Input, OnInit} from '@angular/core';
import {ChartService} from '../chart.service';
import {ChartDataSets, ChartType, RadialChartOptions} from 'chart.js';
import {ChartData, WonWithMethods} from '../charts.types';
import {concatAll, skip} from 'rxjs/operators';

@Component({
  selector: 'app-round-won-by',
  templateUrl: './round-won-by.component.html',
  styleUrls: ['./round-won-by.component.scss']
})
export class RoundWonByComponent implements OnInit {

  @Input()
  readonly gameId: number;

  readonly chartType: ChartType = 'radar';
  readonly chartLabels: string[] = ['EXPLOIT()', 'INFECT()', 'NOP()', 'OVERHEAR()', 'OVERLOAD()', 'PATCH()', 'SCAN()'];
  readonly chartOptions: RadialChartOptions = {
    responsive: true
  };

  chartData: ChartDataSets[] = [];

  constructor(private readonly chartService: ChartService) {
  }

  ngOnInit(): void {
    this.chartService.getWonWithMethods(this.gameId)
      .pipe(concatAll())
      .pipe(skip(1))
      .subscribe(bot => this.chartData.push(this.prepareChartData(bot))
      );
  }

  private prepareChartData(bot: WonWithMethods): ChartData {
    const result: ChartData = {data: [], label: ''};
    result.label = bot.NAME;
    Object.entries(bot.STATISTICS).forEach(([key, value]) => result.data.push(value));
    return result;
  }

}
