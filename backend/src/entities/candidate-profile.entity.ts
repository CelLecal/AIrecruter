import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne, // Добавлено
  JoinColumn, // Добавлено
} from "typeorm";
import { CandidatesEntity } from "./candidates.entity"; // Проверьте путь

@Entity("candidate_profiles")
export class CandidateProfEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  candidate_id!: number;

  @Column()
  license_category!: string;

  @Column()
  experience_years!: number;

  @Column()
  work_schedule_preference!: string;

  @Column()
  hiring_score!: number;

  @Column()
  risk_level!: number;

  @Column()
  ai_summary!: string;

  @Column()
  hr_recommendation!: string;

  // Настройка связи с указанием существующей колонки candidate_id
  @OneToOne(() => CandidatesEntity, (candidate) => candidate.profile)
  @JoinColumn({ name: "candidate_id" })
  candidate!: CandidatesEntity;
}
