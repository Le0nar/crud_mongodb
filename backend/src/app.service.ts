import { Injectable } from '@nestjs/common';
import { recognizeFace } from './utils/recognize-face.utils';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUpload(file: Express.Multer.File) {
    const isFaceRecognized = recognizeFace();
    console.log('isFaceRecognized', isFaceRecognized)

    // TODO: add service for handle image and set result to mongodb
    // TODO: save in db here
    //TODO: return to FE isFaceRecognized or not
    return '';
  }
}
