import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger';
import { setupValidation } from './config/validation-pipeline';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);
  setupValidation(app);

  app.setGlobalPrefix('api');
  app.enableCors({ origin: '*' });

  await app.listen(3000);

  const url = await app.getUrl();
  Logger.log(`Application is running on: ${url}/api`);
  Logger.log(`Documentation is running on: ${url}/api/documentation`);
}
bootstrap();
