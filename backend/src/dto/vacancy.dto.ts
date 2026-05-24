import { VacancyEntity } from "../entities/vacancies.entity";

export class VacancyDto {
  id!: number;
  title!: string;
  department!: string;
  location!: string;
  required_license_category!: string;
  status!: string;
  shift_type!: string;
  min_experience_years!: number;

  constructor(ent: VacancyEntity) {
    this.id = ent.id;
    this.title = ent.title;
    this.department = ent.department;
    this.location = ent.location;
    this.shift_type = ent.shift_type;
    this.min_experience_years = ent.min_experience_years;
    this.required_license_category = ent.required_license_category;
    this.status = ent.status;
  }
}
