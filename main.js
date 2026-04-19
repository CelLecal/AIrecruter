"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // 🔥 глобальный префикс API
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Auth API')
        .setDescription('Authorization endpoints only')
        .setVersion('1.0')
        .addTag('auth')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    // 📄 Swagger будет тут:
    // http://localhost:3000/api/docs
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    await app.listen(3000);
}
bootstrap();
