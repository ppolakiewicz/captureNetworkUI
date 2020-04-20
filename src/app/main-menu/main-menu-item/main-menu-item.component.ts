import { Component, OnInit, Input } from '@angular/core';
import { IGameDescription } from '../interfaces/igame-description'

@Component({
  selector: 'app-main-menu-item',
  templateUrl: './main-menu-item.component.html',
  styleUrls: ['./main-menu-item.component.scss']
})
export class MainMenuItemComponent implements OnInit {

  @Input() gameDescription: IGameDescription;

  constructor() { }

  ngOnInit(): void {
  }

}
