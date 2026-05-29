import { SettingsEntity } from "../entities/ai-settings.entity";
export declare class SettingsDto {
    provider_code: string;
    model_name: string;
    api_key: string;
    constructor(ent: SettingsEntity);
}
