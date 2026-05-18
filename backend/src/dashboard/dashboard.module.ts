import { Module } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { DashboardController } from "./dashboard.controller";
import { CandidatesEntity } from "../entities/candidates.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  providers: [DashboardService],
  controllers: [DashboardController],
  imports: [TypeOrmModule.forFeature([CandidatesEntity])],
})
export class DashboardModule {}
