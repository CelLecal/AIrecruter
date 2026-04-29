import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CandidatesModule } from './candidates/candidate.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateEntity } from './candidates/entities/candidate.entity';
import { createConnection } from '../db/data-source';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { VacanciesModule } from './vacancies/vacancies.module';
import { VacancyEntity } from './vacancies/entities/vacancies.entity';

@Module({
  imports: [
    AuthModule,
    DashboardModule,
    CandidatesModule,
    UserModule,
    VacanciesModule,
    TypeOrmModule.forRoot(createConnection),
    TypeOrmModule.forFeature([CandidateEntity, VacancyEntity]),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
