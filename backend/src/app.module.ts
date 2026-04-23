import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CandidatesModule } from './candidates/candidate.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { CandidatesService } from './candidates/candidate.service';
import { CandidateEntity } from './candidates/entities/candidate.entity';
import { createConnection } from '../db/data-source';

@Module({
  imports: [
    AuthModule,
    DashboardModule,
    CandidatesModule,
    TypeOrmModule.forRoot(createConnection),
    TypeOrmModule.forFeature([CandidateEntity]),
  ],
  controllers: [AppController],
  providers: [AppService, CandidatesService],
  exports: [CandidatesService],
})
export class AppModule {}
