import { CandidatesEntity } from "entities/candidates.entity";

export class CandidateDto {
  id!: number;
  full_name!: string;
  phone!: string;
  email!: string;
  birth_date!: string;
  city!: string;
  current_status!: string;
  created_at!: Date;

  constructor(ent: CandidatesEntity) {
    this.id = ent.id;
    this.full_name = ent.full_name;
    this.phone = ent.phone;
    this.email = ent.email;
    this.birth_date = ent.birth_date;
    this.city = ent.city!;
    this.current_status = ent.current_status;
    this.created_at = ent.created_at;
  }
}
