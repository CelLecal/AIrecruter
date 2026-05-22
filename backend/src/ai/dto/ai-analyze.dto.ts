import { AiEntity } from "entities/ai.entity";

export class AnalyzeDto {
  candidate_id!: number;
  summary_text!: string;
  fit_assessment!: string;
  risk_assessment!: string;
  recommendation_text!: string;
  provider_code!: string;
  model_name!: string;
  created_at!: Date;

  constructor(ent: AiEntity) {
    this.candidate_id = ent.candidate_id;
    this.summary_text = ent.summary_text;
    this.fit_assessment = ent.fit_assessment;
    this.risk_assessment = ent.risk_assessment;
    this.recommendation_text = ent.recommendation_text;
    this.provider_code = ent.provider_code!;
    this.model_name = ent.model_name;
    this.created_at = ent.created_at;
  }
}
