import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller('me')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService
  ) { }

  @Get()
  async getProfile(){
    const CatFactResponse = await this.appService.getData();

    return {
      status: 200,
      user: {
        email: this.config.get<string>('EMAIL'),
        name: this.config.get<string>('FULLNAME'),
        stack: this.config.get<string>('STACK')
      },
      timestamp: new Date().toISOString(),
      fact: CatFactResponse
    }
  }
}
