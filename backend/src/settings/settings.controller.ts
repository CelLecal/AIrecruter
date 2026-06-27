import { Controller, Get, Post, Param } from "@nestjs/common";
import { SettingsService } from "./settings.service";

@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get("ai")
  async currentSettings() {
    const data = await this.settingsService.currentSettings();
    return data;
  }
  @Post("ai/:id")
  saveProvSettings(@Param("id") id: string) {
    return this.settingsService.saveProvSettings(id);
  }
  @Get("ai/providers")
  currentProv() {
    const data = this.settingsService.currentProv();
    return data;
  }
}
