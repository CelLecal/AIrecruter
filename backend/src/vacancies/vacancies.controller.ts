import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VacanciesService } from './vacancies.service';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly vacanciesService: VacanciesService) {}

  @Get()
  getList() {
    return this.vacanciesService.getList();
  }
}
