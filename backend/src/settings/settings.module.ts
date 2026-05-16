import { Module } from "@nestjs/common";
import { SettingsService } from "./settings.service";
import { SettingsController } from "./settings.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SettingsEntity } from "entities/ai-settings.entity";

@Module({
  providers: [SettingsService],
  controllers: [SettingsController],
  imports: [TypeOrmModule.forFeature([SettingsEntity])],
})
export class SettingsModule {}
