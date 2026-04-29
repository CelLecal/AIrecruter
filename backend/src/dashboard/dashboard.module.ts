import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { CandidatesService } from '../candidates/candidate.service';
import { CandidateEntity } from '../entities/candidate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [DashboardService, CandidatesService],
  controllers: [DashboardController],
  imports: [TypeOrmModule.forFeature([CandidateEntity])],
  exports: [DashboardService, CandidatesService],
})
export class DashboardModule {}
