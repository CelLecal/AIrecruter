import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SettingsEntity } from "entities/settings.entity";
import { Repository } from "typeorm";

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(SettingsEntity)
    private readonly aiEntity: Repository<SettingsEntity>,
  ) {}
}
