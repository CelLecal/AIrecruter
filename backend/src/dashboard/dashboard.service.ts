import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getDashboardData() {
    return {
      totalUsers: 100,
      activeSessions: 23,
      salesToday: 5400,
    };
  }
}
