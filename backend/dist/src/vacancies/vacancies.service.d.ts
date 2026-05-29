import { Repository } from "typeorm";
import { VacancyEntity } from "../entities/vacancies.entity";
import { VacancyDto } from "../dto/vacancy.dto";
export declare class VacanciesService {
    private vacanciesRepository;
    constructor(vacanciesRepository: Repository<VacancyEntity>);
    getList(): Promise<VacancyDto[]>;
}
