import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';
import { AuthGuard } from './common/guards/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({}));

  const options = new DocumentBuilder()
    .setTitle('Wine Cellar API')
    .setVersion('0.0.1')
    .addTag('wines')
    .addTag('cellars')
    .addTag('countries')
    .addTag('districts')
    .addTag('grapes')
    .addTag('producers')
    .addTag('wine-types')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
