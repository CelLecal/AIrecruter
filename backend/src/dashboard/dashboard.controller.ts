import { Controller, Get } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";

@Controller("dashboard")
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async DashboardStats() {
    const data = await this.dashboardService.getCombinedData(7);
    return data;
  }
}
