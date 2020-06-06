
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameTableDataSource } from './game-table.datasource';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss'],
})
export class GameTableComponent implements OnInit {

  public firstBotName: string;
  public secondBotName: string;
  public dataSource: GameTableDataSource;
  public displayedColumns: string[] = [
    'round',
    'firstBot-bot1_points', 'firstBot-bot1_time', 'firstBot-bot1_used',
    'secondBot-bot2_points', 'secondBot-bot2_time', 'secondBot-bot2_used'
  ];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.dataSource = new GameTableDataSource(+params['id'], this.http)
    );

    this.route.queryParams.subscribe(params => {
      this.firstBotName = params['bot1'];
      this.secondBotName = params['bot2'];
    })
  }
}
