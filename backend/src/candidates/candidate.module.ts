import { Module } from "@nestjs/common";
import { CandidatesService } from "./candidate.service";
import { CandidatesController } from "./candidate.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidatesEntity } from "../entities/candidates.entity";
import { AiResultEntity } from "../entities/candidate_ai_result.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CandidatesEntity, AiResultEntity])],
  controllers: [CandidatesController],
  providers: [CandidatesService],
  exports: [CandidatesService],
})
export class CandidatesModule {}
