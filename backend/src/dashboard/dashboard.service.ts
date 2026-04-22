import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getDashboardData() {
    return 'dashboard';
  }
}
