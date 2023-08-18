import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger';
import { setupValidation } from './config/validation-pipeline';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('api');
  app.enableCors({ origin: '*' });

  setupSwagger(app);
  setupValidation(app);

  await app.listen(process.env.PORT || 3000, '0.0.0.0');

  const url = await app.getUrl();
  Logger.log(`Application is running on: ${url}/api`);
  Logger.log(`Documentation is running on: ${url}/api/documentation`);
}
bootstrap();
