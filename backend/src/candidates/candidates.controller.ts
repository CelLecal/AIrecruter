import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CandidatesService } from './candidates.service';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  // GET /candidates
  @Get()
  getCandidates() {
    return this.candidatesService.findAll();
  }

  // GET /candidates/:id
  @Get(':id')
  getCandidate(@Param('id', ParseIntPipe) id: number) {
    return this.candidatesService.findOne(id);
  }
}