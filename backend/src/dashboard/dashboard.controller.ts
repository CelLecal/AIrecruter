import { Controller, Get, Query } from '@nestjs/common';
import { CandidatesService } from '../candidates/candidate.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get('recentCandidates')
  async getRecentCandidates(@Query('days') days: string) {
    const daysNum = parseInt(days, 7);
    return this.candidatesService.findRecentCandidates(daysNum);
  }
}
