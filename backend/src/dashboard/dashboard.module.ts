import { Module } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { DashboardController } from "./dashboard.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DashboardEntity } from "entities/dashboard.entity";

@Module({
  providers: [DashboardService],
  controllers: [DashboardController],
  imports: [TypeOrmModule.forFeature([DashboardEntity])],
})
export class DashboardModule {}
