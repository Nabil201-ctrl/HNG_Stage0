import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getData(): Promise<string> {
    try {
      const response = await firstValueFrom(
        this.httpService.get('https://catfact.ninja/fact'),
      );
      return response.data.fact;
    } catch (error) {
      return 'Cat fact service unavailable right now.';
    }
  }
}
