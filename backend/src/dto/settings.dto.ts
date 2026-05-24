import { SettingsEntity } from "entities/ai-settings.entity";

export class SettingsDto {
  provider_code!: string;
  model_name!: string;
  api_key!: string;

  constructor(ent: SettingsEntity) {
    this.provider_code = ent.provider_code;
    this.model_name = ent.model_name;
    this.api_key = ent.api_key;
  }
}
