import { VacancyEntity } from "../entities/vacancies.entity";
export declare class VacancyDto {
    id: number;
    title: string;
    department: string;
    location: string;
    required_license_category: string;
    status: string;
    shift_type: string;
    min_experience_years: number;
    constructor(ent: VacancyEntity);
}
