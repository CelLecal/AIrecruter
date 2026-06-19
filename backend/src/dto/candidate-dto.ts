import { CandidatesEntity } from "entities/candidates.entity";
import { CandidateProfEntity } from "entities/candidate-profile.entity";
import { CandidateDocsEntity } from "entities/candidate-documents.entity";

export class CandidateDto {
  id!: number;
  full_name!: string;
  phone!: string;
  email!: string;
  birth_date!: string;
  city!: string;
  current_status!: string;
  created_at!: Date;
  candidate_id!: number;
  license_category!: string;
  experience_years!: number;
  work_schedule_preference!: string;
  hiring_score!: number;
  risk_level!: number;
  ai_summary!: string;
  hr_recommendation!: string;

  constructor(canEnt: CandidatesEntity, profEnt: CandidateProfEntity) {
    this.id = canEnt.id;
    this.full_name = canEnt.full_name;
    this.phone = canEnt.phone;
    this.email = canEnt.email;
    this.birth_date = canEnt.birth_date;
    this.city = canEnt.city!;
    this.current_status = canEnt.current_status;
    this.created_at = canEnt.created_at;
    this.candidate_id = profEnt.candidate_id;
    this.license_category = profEnt.license_category;
    this.experience_years = profEnt.experience_years;
    this.work_schedule_preference = profEnt.work_schedule_preference;
    this.hiring_score = profEnt.hiring_score;
    this.risk_level = profEnt.risk_level;
    this.ai_summary = profEnt.ai_summary;
    this.hr_recommendation = profEnt.hr_recommendation;
  }
}
