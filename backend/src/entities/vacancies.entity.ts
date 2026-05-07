import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity("vacancies")
export class VacancyEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  department!: string;

  @Column()
  location!: string;

  @Column()
  required_license_category!: string;

  @Column()
  status!: string;
}
