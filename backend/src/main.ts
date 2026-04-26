import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as yaml from 'yaml';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerFile = fs.readFileSync(
    join(process.cwd(), 'backend/swagger.yml'),
    'utf8',
  );
  const swaggerDocument = yaml.parse(swaggerFile);

  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3000);

  app.enableCors({
    origin: '*',
  });

  bootstrap();
}
