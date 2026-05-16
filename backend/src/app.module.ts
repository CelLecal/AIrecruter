import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { CandidatesModule } from "./candidates/candidate.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { VacanciesModule } from "./vacancies/vacancies.module";
import { AiModule } from "./ai/ai.module";
import { SettingsModule } from "settings/settings.module";
require("dotenv").config();

@Module({
  imports: [
    AuthModule,
    DashboardModule,
    CandidatesModule,
    UserModule,
    VacanciesModule,
    AiModule,
    SettingsModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/src/entities/*.entity.js"],
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
