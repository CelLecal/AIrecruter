import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('vacancies')
export class VacancyEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 'title' })
  title!: string;

  @Column({ default: 'departament' })
  departament!: string;

  @Column({ default: 'location' })
  location!: string;

  @Column({ default: 'license' })
  required_license_category!: string;

  @Column({ default: 'status' })
  status!: string;
}
