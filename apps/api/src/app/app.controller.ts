import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('games')
  getGames() {
    return this.appService.getGames();
  }

  @Get('game')
  getGame(id: string) {
    return this.appService.getGame(id);
  }
}
