import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameTableComponent} from './game/game-table/game-table.component';
import {GameComponent} from './game/game.component';
import {MainMenuItemComponent} from './main-menu/main-menu-item/main-menu-item.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from './home/home.component';
import {ChartsModule} from 'ng2-charts';
import { RoundWonByComponent } from './game/charts/round-won-by/round-won-by.component';
import { RoundLostByComponent } from './game/charts/round-lost-by/round-lost-by.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainMenuItemComponent,
    GameComponent,
    GameTableComponent,
    HomeComponent,
    RoundWonByComponent,
    RoundLostByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
