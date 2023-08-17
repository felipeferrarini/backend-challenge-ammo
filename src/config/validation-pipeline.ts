import { INestApplication, ValidationPipe } from '@nestjs/common';

export const setupValidation = (app: INestApplication) => {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
};
