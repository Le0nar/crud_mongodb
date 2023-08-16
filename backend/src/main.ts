import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // TODO: config cors
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(4000);
}
bootstrap();
