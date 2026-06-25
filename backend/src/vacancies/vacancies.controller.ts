import {
  Controller,
  Get,
  Post,
  NotFoundException,
  Param,
  ParseIntPipe,
  Body,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { VacanciesService } from "./vacancies.service";
import { VacancyDto } from "dto/vacancy.dto";
import { CreateVacancyDto } from "dto/create-vacancy.dto";

@Controller("vacancies")
export class VacanciesController {
  constructor(private readonly vacanciesService: VacanciesService) {}

  @Get()
  async getList() {
    return this.vacanciesService.getList();
  }

  @Get(":id")
  async getVacancy(@Param("id", ParseIntPipe) id: number) {
    const vacancy = await this.vacanciesService.getVacancy(id);
    if (!vacancy) {
      throw new NotFoundException("Вакансия не найдена");
    }
    return vacancy;
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createVacancyDto: CreateVacancyDto) {
    return this.vacanciesService.createVacancy(createVacancyDto);
  }
}
