import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import fs from 'node:fs';
import path from 'node:path';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('image')
  @UseInterceptors(FileInterceptor('imageimage'))
  getImage(@UploadedFile() imageimage: Express.Multer.File) {
    console.log('imageimage', imageimage);

    return '1';
  }
}
