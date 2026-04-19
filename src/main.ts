import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔥 глобальный префикс API
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Auth API')
    .setDescription('Authorization endpoints only')
    .setVersion('1.0')
    .addTag('auth')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // 📄 Swagger будет тут:
  // http://localhost:3000/api/docs
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();