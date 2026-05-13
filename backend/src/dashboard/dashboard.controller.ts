import { Controller, Get } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";

@Controller("dashboard")
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get("newCandidates")
  async newCandidates() {
    const data = await this.dashboardService.newCandidates(7);
    return data;
  }
  @Get("primarySelection")
  async primarySelection() {
    const data = await this.dashboardService.primarySelection();
    return data;
  }
  @Get("docVerif")
  async docVerif() {
    const data = await this.dashboardService.docVerif();
    return data;
  }
  @Get("readyForRegis")
  async readyForRegis() {
    const data = await this.dashboardService.readyForRegis();
    return data;
  }
  @Get("latestCandidates")
  async latestCandidates() {
    const data = await this.dashboardService.latestCandidates(7);
    return data;
  }
  @Get("hiringFunnel")
  async hiringFunnel() {
    const data = await this.dashboardService.countsArray();
    return data;
  }
}
