import { Module } from "@nestjs/common";
import { AiService } from "./ai.service";
import { AiController } from "./ai.controller";
import { ConfigModule } from "@nestjs/config";

@Module({
  providers: [AiService],
  controllers: [AiController],
  imports: [ConfigModule.forRoot({ isGlobal: true })],
})
export class AiModule {}
