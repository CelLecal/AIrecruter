import { Controller, Get } from "@nestjs/common";
import { SettingsService } from "./settings.service";

@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}
  @Get("ai")
  async currentSettings() {
    const data = await this.settingsService.currentSettings();
    return data;
  }
}
