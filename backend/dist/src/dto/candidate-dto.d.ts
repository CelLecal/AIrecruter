import { CandidatesEntity } from "../entities/candidates.entity";
import { CandidateProfEntity } from "../entities/candidate-profile.entity";
export declare class CandidateDto {
    id: number;
    full_name: string;
    phone: string;
    email: string;
    birth_date: string;
    city: string;
    current_status: string;
    created_at: Date;
    candidate_id: number;
    license_category: string;
    experience_years: number;
    work_schedule_preference: string;
    hiring_score: number;
    risk_level: number;
    ai_summary: string;
    hr_recommendation: string;
    constructor(canEnt: CandidatesEntity, profEnt: CandidateProfEntity);
}
