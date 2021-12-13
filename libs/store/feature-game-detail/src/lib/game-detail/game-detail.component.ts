import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Game } from '@bg-hoard/util-interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'bg-hoard-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent {
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  game$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) => {
      return this.httpClient.get<Game>(`/api/game/${params.get('id')}`);
    }),
  );
}
