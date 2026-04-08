import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CandidatesService } from './candidates/candidates.service';
import { DashboardService } from './dashboard/dashboard.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly candidatesService: CandidatesService,
    private readonly dashboardService: DashboardService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('candidates')
  getCandidate(): string {
    return this.candidatesService.getCandidate();
  }
  @Get('dashboard')
  getDashboard() {
    return this.dashboardService.getDashboardData();
  }
  // @Get('auth')
  // getAuth(): string {
  //   return this.authService.getAuth();
  // }
}
