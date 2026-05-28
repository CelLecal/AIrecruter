import { Controller, Get } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";

@Controller("dashboard")
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async hiringFunnel() {
    const data = await this.dashboardService.showDashboard();
    return data;
  }
}
