import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = this.httpClient.get<any>('/api/games');
  formatRating = formatRating;

  constructor(private readonly httpClient: HttpClient) {}
}
