import { Injectable } from '@nestjs/common';
import { recognizeFace } from './utils/recognize-face.utils';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUpload(file: Express.Multer.File) {
    recognizeFace()

    // TODO: save in db here
    return ''
  }
}
