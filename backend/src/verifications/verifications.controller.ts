import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Verification } from './schemas/verification.schema';
import { UsersService } from './verifications.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('verification')
export class VerificationsController {
  constructor(private readonly verificationsService: UsersService) {}

  @Get()
  async getVirefications(): Promise<Verification[]> {
      return this.verificationsService.getVerifications();
  }

  @Post('/file')
    @UseInterceptors(FileInterceptor('file'))
    handleUpload (@UploadedFile() file: Express.Multer.File) {

    return this.verificationsService.handleUpload(file)
  }
}