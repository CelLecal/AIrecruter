import { Module } from '@nestjs/common';
import { CandidatesService } from './candidate.service';
import { CandidatesController } from './candidate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateEntity } from './entities/candidate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CandidateEntity])],
  controllers: [CandidatesController],
  providers: [CandidatesService],
})
export class CandidatesModule {}
