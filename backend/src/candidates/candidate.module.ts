import { Module } from "@nestjs/common";
import { CandidatesService } from "./candidate.service";
import { CandidatesController } from "./candidate.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidatesEntity } from "../entities/candidates.entity";
import { AiResultEntity } from "../entities/candidate_ai_result.entity";
import { AiEntity } from "entities/ai.entity";
import { AiService } from "ai/ai.service";
import { CandidateProfEntity } from "entities/candidate-profile.entity";
import { CandidateDocsEntity } from "entities/candidate-documents.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CandidatesEntity,
      AiResultEntity,
      AiEntity,
      CandidateProfEntity,
      CandidateDocsEntity,
    ]),
  ],
  controllers: [CandidatesController],
  providers: [CandidatesService, AiService],
  exports: [CandidatesService],
})
export class CandidatesModule {}
