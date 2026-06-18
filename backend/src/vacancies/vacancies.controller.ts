import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from "@nestjs/common";
import { VacanciesService } from "./vacancies.service";

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
}
