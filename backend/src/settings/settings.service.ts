import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SettingsEntity } from "entities/ai-settings.entity";
import { Repository } from "typeorm";
import { SettingsDto } from "./dto/settings.dto";

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(SettingsEntity)
    private readonly settingsRepository: Repository<SettingsEntity>,
  ) {}
  async currentSettings() {
    return this.settingsRepository.find({
      where: {
        is_active: true,
      },
    });
  }
  async saveProvSettings(data: SettingsDto) {
    const provSettings = new SettingsEntity();
    provSettings.provider_code = data.provider_code;
    provSettings.model_name = data.model_name;
    provSettings.api_key = data.api_key;

    const res = await provSettings.save();
    return new SettingsDto(res);
  }
  async currentProv() {
    const provSettings = await SettingsEntity.find();
    return provSettings.map((settings) => ({
      provider_code: settings.provider_code,
      model_name: settings.model_name,
    }));
  }
}
