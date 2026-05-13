import { CandidateEntity } from 'entities/candidate.entity';

export class CandidateDto {
  id!: number;
  full_name!: string;
  phone!: string;
  email!: string;
  birth_date!: string;
  city!: string;
  current_status!: string;
  created_at!: Date;

  license_category?: string;
  experience_years?: number;
  fit_score?: number;
  risk_level?: string;
  passport?: string;
  birth_place?: string;
  issue_date?: string;

  constructor(ent: CandidateEntity) {
    this.id = ent.id;
    this.full_name = ent.full_name;
    this.phone = ent.phone;
    this.email = ent.email;
    this.birth_date = ent.birth_date;
    this.city = ent.city!;
    this.current_status = ent.current_status;
    this.created_at = ent.created_at;

    this.license_category = ent.license_category;
    this.experience_years = ent.experience_years;
    this.fit_score = ent.fit_score;
    this.risk_level = ent.risk_level;
    this.passport = ent.passport;
    this.birth_place = ent.birth_place;
    this.issue_date = ent.issue_date;
  }
}
