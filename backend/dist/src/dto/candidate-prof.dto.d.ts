import { CandidateProfEntity } from "../entities/candidate-profile.entity";
export declare class CandidateProfDto {
    candidate_id: number;
    ai_summary: string;
    hr_recommendation: string;
    constructor(ent: CandidateProfEntity);
}
