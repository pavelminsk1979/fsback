import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getAccessTokenFromGoogle(@Body() body: { value: string }) {
    const { value } = body;
    console.log('body', value);

    return '11111';
  }
}
