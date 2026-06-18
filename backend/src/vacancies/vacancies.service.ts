import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { VacancyEntity } from "../entities/vacancies.entity";
import { VacancyDto } from "../dto/vacancy.dto";

@Injectable()
export class VacanciesService {
  constructor(
    @InjectRepository(VacancyEntity)
    private vacanciesRepository: Repository<VacancyEntity>,
  ) {}

  async getList() {
    const vacancies = await this.vacanciesRepository.find();
    return vacancies.map((item) => new VacancyDto(item));
  }
  async getVacancy(vacancyId: number) {
    return await this.vacanciesRepository.findOne({
      where: { id: vacancyId },
    });
  }
}
