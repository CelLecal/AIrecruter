import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('candidate_profiles')
export class CandidateProfEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 1 })
  candidate_id!: number;

  @Column({ default: 'category' })
  license_category!: string;

  @Column({ default: 0 })
  expritience_years!: number;

  @Column({ default: 'preference' })
  work_schedule_preference!: string;

  @Column({ default: 0 })
  hiring_score!: number;

  @Column({ default: 0 })
  risk_level!: number;

  @Column({ default: 'summary' })
  ai_summary!: string;

  @Column({ default: 'recommendation' })
  hr_recommendation!: string;
}
