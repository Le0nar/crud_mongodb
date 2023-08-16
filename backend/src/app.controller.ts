import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // TODO: add service for handle image and set result to mongodb
  @Post('/file')
    @UseInterceptors(FileInterceptor('file'))
    handleUpload (@UploadedFile() file: Express.Multer.File) {

    console.log('file', file);
    return `Uploaded`
  }
}
