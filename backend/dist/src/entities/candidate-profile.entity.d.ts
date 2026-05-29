import { BaseEntity } from "typeorm";
export declare class CandidateProfEntity extends BaseEntity {
    id: number;
    candidate_id: number;
    license_category: string;
    experience_years: number;
    work_schedule_preference: string;
    hiring_score: number;
    risk_level: number;
    ai_summary: string;
    hr_recommendation: string;
}
