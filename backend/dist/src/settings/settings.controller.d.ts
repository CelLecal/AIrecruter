import { SettingsService } from "./settings.service";
import { PostSettingsDto } from "../dto/post-settings.dto";
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    currentSettings(): Promise<import("../entities/ai-settings.entity").SettingsEntity[]>;
    saveProvSettings(data: PostSettingsDto): Promise<import("../dto/settings.dto").SettingsDto>;
    currentProv(): Promise<{
        provider_code: string;
        model_name: string;
    }[]>;
}
