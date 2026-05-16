import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SettingsEntity } from "entities/ai-settings.entity";
import { Repository } from "typeorm";

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(SettingsEntity)
    private readonly settingsRepository: Repository<SettingsEntity>,
  ) {}
  async currentSettings() {
    return this.settingsRepository.find({
      where: {
        is_active: "true",
      },
    });
  }
}
