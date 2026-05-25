import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity("applications")
export class ApplicationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  candidate_id!: number;

  @Column()
  vacancy_id!: string;

  @Column()
  application_source!: string;

  @Column()
  screening_status!: string;

  @Column()
  fit_score!: string;

  @CreateDateColumn()
  applied_at!: Date;
}
