import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CandidatesService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidateService: CandidatesService) {}

  @Post()
  create(@Body() data: CreateCandidateDto) {
    return this.candidateService.create(data);
  }
}
