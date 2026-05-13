import { Module } from "@nestjs/common";
import { AiService } from "./ai.service";
import { AiController } from "./ai.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AiEntity } from "entities/ai.entity";

@Module({
  providers: [AiService],
  controllers: [AiController],
  imports: [TypeOrmModule.forFeature([AiEntity])],
})
export class AiModule {}
