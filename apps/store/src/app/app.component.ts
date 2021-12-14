import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { Game } from '@bg-hoard/util-interface';
import { getAllGames } from '../fake-api';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Board Game Hoard';
  games$ = this.httpClient.get<Game[]>('/api/games');
  games = getAllGames();
  formatRating = formatRating;

  constructor(private readonly httpClient: HttpClient) {
    console.log('component constructed');
  }
}
