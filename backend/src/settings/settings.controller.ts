import { Controller, Get, Post, Body } from "@nestjs/common";
import { SettingsService } from "./settings.service";
import { PostSettingsDto } from "../dto/post-settings.dto";

@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get("ai")
  async currentSettings() {
    const data = await this.settingsService.currentSettings();
    return data;
  }
  @Post("ai")
  saveProvSettings(@Body() data: PostSettingsDto) {
    return this.settingsService.saveProvSettings(data);
  }
  @Get("ai/providers")
  currentProv() {
    const data = this.settingsService.currentProv();
    return data;
  }
}
