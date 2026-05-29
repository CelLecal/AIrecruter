import { BaseEntity } from "typeorm";
export declare class VacancyEntity extends BaseEntity {
    id: number;
    title: string;
    department: string;
    location: string;
    shift_type: string;
    required_license_category: string;
    min_experience_years: number;
    status: string;
}
