import { CandidateProfEntity } from "entities/candidate-profile.entity";

export class CandidateProfDto {
  candidate_id!: number;
  ai_summary!: string;
  hr_recommendation!: string;

  constructor(ent: CandidateProfEntity) {
    this.candidate_id = ent.candidate_id;
    this.ai_summary! = ent.ai_summary;
    this.hr_recommendation = ent.hr_recommendation;
  }
}
