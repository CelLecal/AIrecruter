import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AiEntity } from "entities/ai.entity";
import { Repository } from "typeorm";

@Injectable()
export class AiService {
  constructor(
    @InjectRepository(AiEntity)
    private readonly aiEntity: Repository<AiEntity>,
  ) {}
}
