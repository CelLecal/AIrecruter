import { SettingsEntity } from "../entities/ai-settings.entity";
import { Repository } from "typeorm";
import { SettingsDto } from "../dto/settings.dto";
export declare class SettingsService {
    private readonly settingsRepository;
    constructor(settingsRepository: Repository<SettingsEntity>);
    currentSettings(): Promise<SettingsEntity[]>;
    saveProvSettings(data: SettingsDto): Promise<SettingsDto>;
    currentProv(): Promise<{
        provider_code: string;
        model_name: string;
    }[]>;
}
