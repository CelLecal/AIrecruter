import { VacanciesService } from './vacancies.service';
export declare class VacanciesController {
    private readonly vacanciesService;
    constructor(vacanciesService: VacanciesService);
    getList(): Promise<import("../dto/vacancy.dto").VacancyDto[]>;
}
