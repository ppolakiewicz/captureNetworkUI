import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameTableDataSource } from './game-table.datasource';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {

  public dataSource: GameTableDataSource;
  public displayedColumns: string[] = ['round', 'bot1_points', 'bot1_time', 'bot1_used', 'bot2_points', 'bot2_time', 'bot2_used'];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.dataSource = new GameTableDataSource(+params['id'], this.http))
  }

}
