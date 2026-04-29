import { VacancyEntity } from '../entities/vacancies.entity';

export class VacancyDto {
  id!: number;
  title!: string;
  departament!: string;
  location!: string;
  required_license_category!: string;
  status!: string;

  constructor(ent: VacancyEntity) {
    this.id = ent.id;
    this.title = ent.title;
    this.departament = ent.departament;
    this.location = ent.location;
    this.required_license_category = ent.required_license_category;
    this.status = ent.status;
  }
}
