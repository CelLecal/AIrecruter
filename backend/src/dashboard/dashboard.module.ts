import { Module } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { DashboardController } from "./dashboard.controller";
import { CandidateEntity } from "../entities/candidate.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  providers: [DashboardService],
  controllers: [DashboardController],
  imports: [TypeOrmModule.forFeature([CandidateEntity])],
})
export class DashboardModule {}
