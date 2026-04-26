import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CandidatesService } from './candidates/candidate.service';
import { DashboardService } from './dashboard/dashboard.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly candidatesService: CandidatesService,
    private readonly dashboardService: DashboardService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('api/candidates')
  getCandidate(): string {
    return this.candidatesService.getCandidate();
  }
  @Get('api/dashboard')
  getDashboard() {
    return this.dashboardService.getDashboardData();
  }
  @Get('api/auth')
  getAuth(): string {
    return this.authService.getAuth();
  }
  @Get('api/users')
  getUsers(): string {
    return this.userService.getUsers();
  }
}
