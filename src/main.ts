import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
// import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation pipeline globally
  app.useGlobalPipes(
    // new ValidationPipe({
    //   whitelist: true, // Strip properties that don't have any decorators
    //   transform: true, // Transform payloads to be objects typed according to their DTO classes
    //   forbidNonWhitelisted: true, // Throw errors when non-whitelisted properties are present
    // }),

    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(
          validationErrors.map((error) => ({
            field: error.property,
            error: Object.values(error?.constraints || '').join(', '),
          })),
        );
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
