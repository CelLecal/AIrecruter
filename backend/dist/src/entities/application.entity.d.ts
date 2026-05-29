import { BaseEntity } from "typeorm";
export declare class ApplicationEntity extends BaseEntity {
    id: number;
    candidate_id: number;
    vacancy_id: string;
    application_source: string;
    screening_status: string;
    fit_score: string;
    applied_at: Date;
}
