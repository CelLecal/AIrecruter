import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CandidatesModule } from './candidates/candidate.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { CandidatesController } from 'candidates/candidate.controller';
import { CandidatesService } from './candidates/candidate.service';
import { Candidate } from './candidates/entities/candidate.entity';

@Module({
  imports: [
    AuthModule,
    DashboardModule,
    CandidatesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: 'postgres',
      password: 'your_password',
      database: process.env.DB_NAME,
      port: 5432,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Candidate]),
  ],
  controllers: [AppController],
  providers: [AppService, CandidatesService],
  exports: [CandidatesService],
})
export class AppModule {}
