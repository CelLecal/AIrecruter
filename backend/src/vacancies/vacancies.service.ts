import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { VacancyEntity } from "../entities/vacancies.entity";
import { CreateVacancyDto } from "dto/create-vacancy.dto";
import { VacancyDto } from "dto/vacancy.dto";
@Injectable()
export class VacanciesService {
  constructor(
    @InjectRepository(VacancyEntity)
    private vacanciesRepository: Repository<VacancyEntity>,
  ) {}
  private vacancy: any[] = [];
  async getList() {
    const vacancies = await this.vacanciesRepository.find();
    return vacancies.map((item) => new VacancyDto(item));
  }
  async getVacancy(vacancyId: number) {
    return await this.vacanciesRepository.findOne({
      where: { id: vacancyId },
    });
  }
  createVacancy(createVacancyDto: CreateVacancyDto) {
    const newData = {
      id: Date.now(),
      ...createVacancyDto,
    };
    this.vacancy.push(newData);
    return {
      success: true,
      data: newData,
      message: "Data saved successfully",
    };
  }
}
