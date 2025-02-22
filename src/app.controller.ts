import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'node:fs';
import * as path from 'node:path';
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

    const dirPath = path.join(__dirname, 'content', '10');

    const filePath = path.join(dirPath, imageimage.originalname);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFile(filePath, imageimage.buffer, (err) => {
      if (err) {
        console.error('Ошибка при сохранении файла:', err);
        return '400 not save image';
      }
      console.log('Файл успешно сохранен:', filePath);
    });

    return '200:ok!';
  }
}
