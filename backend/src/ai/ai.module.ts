import { Module } from "@nestjs/common";
import { AiService } from "./ai.service";
import { AiController } from "./ai.controller";
import { ConfigModule } from "@nestjs/config";
import { CandidateDocsEntity } from "entities/candidate-documents.entity";
import { CandidateProfEntity } from "entities/candidate-profile.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidatesEntity } from "entities/candidates.entity";
import { ApplicationEntity } from "entities/application.entity";
import { VacancyEntity } from "entities/vacancies.entity";

@Module({
  providers: [AiService],
  controllers: [AiController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature([
      CandidatesEntity,
      CandidateDocsEntity,
      CandidateProfEntity,
      VacancyEntity,
      ApplicationEntity,
    ]),
  ],
})
export class AiModule {}
