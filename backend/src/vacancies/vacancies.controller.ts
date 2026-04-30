import { Controller, Get } from '@nestjs/common';
import { VacanciesService } from './vacancies.service';

@Controller('vacancies')
export class VacanciesController {
  constructor(private readonly vacanciesService: VacanciesService) {}

  @Get()
  findAll() {
    return this.vacanciesService.findAll();
  }
}