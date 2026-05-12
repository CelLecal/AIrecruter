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
require("dotenv").config();

@Module({
  imports: [
    AuthModule,
    DashboardModule,
    CandidatesModule,
    UserModule,
    VacanciesModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["src/entities/**/*.entity.ts"],
      synchronize: false,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


/*------------------это было временно---------------------*/

/*import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CandidatesModule } from "./candidates/candidate.module";
import { ConfigModule } from "@nestjs/config";
require("dotenv").config();

@Module({
  imports: [
    CandidatesModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}*/
