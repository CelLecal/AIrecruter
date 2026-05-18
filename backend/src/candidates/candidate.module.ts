import { Module } from "@nestjs/common";
import { CandidatesService } from "./candidate.service";
import { CandidatesController } from "./candidate.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidatesEntity } from "../entities/candidates.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CandidatesEntity])],
  controllers: [CandidatesController],
  providers: [CandidatesService],
  exports: [CandidatesService],
})
export class CandidatesModule {}

/*----------------------это было временно-----------------------*/

/*import { Module } from "@nestjs/common";
import { CandidatesController } from "./candidate.controller";
import { CandidatesService } from "./candidate.service";

@Module({
  controllers: [CandidatesController],
  providers: [CandidatesService],
})
export class CandidatesModule {}*/
