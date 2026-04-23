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
import { CandidateDto } from './dto/candidate.dto';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Post()
  create(@Body() data: CreateCandidateDto) {
    return this.candidatesService.create(data);
  }
  @Get('candidates')
  getList() {
    return this.candidatesService.getList();
  }
}
