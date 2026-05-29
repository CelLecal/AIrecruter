import { BaseEntity } from "typeorm";
export declare class AiResultEntity extends BaseEntity {
    id: number;
    candidate_id: number;
    summary_text: string;
    fit_assessment: string;
    risk_assessment: string;
    recommendation_text: string;
    provider_code: string;
    model_name: string;
    created_at: Date;
}
