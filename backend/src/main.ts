import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as yaml from 'yaml';
import { join } from 'path';
import { setGlobalProxyFromEnv } from 'http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const swaggerFile = fs.readFileSync(
    join(process.cwd(), 'backend/swagger.yml'),
    'utf8',
  );
  const swaggerDocument = yaml.parse(swaggerFile);
  app.enableCors({
    origin: ['http://localhost:5173/'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentails: false,
  });
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
