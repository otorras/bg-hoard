import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('games')
  getGames() {
    return this.appService.getGames();
  }

  @Get('game/:id')
  getGame(@Param() params) {
    return this.appService.getGame(params.id);
  }
}
