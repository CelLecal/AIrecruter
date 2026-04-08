import { Injectable } from '@nestjs/common';
import { timestamp } from 'rxjs';

@Injectable()
export class DashboardService {
  getDashboardData() {
    return {
      //   async getLastWeekNewUsersCount(): Promise<number> {
      //     const endDate = new Date();
      //     const startDate = new Date();
      //     startDate.setDate(endDate.getDate() - 7);
      //     return this.User.count({
      //       where: {
      //         createdAt: Between(startDate, endDate),
      //       },
      //     });
      //   },
      // screeningIsDone: current_status == 'screening',
      // screeningInProcess: screening_status == 'process' // (спросить как обозначила)
      // readyToRegistration: screening_status == 'passed'
    };
  }
}
