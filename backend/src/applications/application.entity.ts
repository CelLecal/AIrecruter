import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Candidate } from '../candidates/candidates.entity';
import { Vacancy } from '../vacancies/vacancies.entity';

export enum ApplicationStatus {
  APPLIED = 'applied',
  SCREENING = 'screening',
  INTERVIEW = 'interview',
  REJECTED = 'rejected',
  HIRED = 'hired',
}

@Entity('applications')
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  // 🔹 кандидат
  @ManyToOne(() => Candidate, (candidate) => candidate.id, {
    onDelete: 'CASCADE',
  })
  candidate: Candidate;

  // 🔹 вакансия
  @ManyToOne(() => Vacancy, (vacancy) => vacancy.id, {
    onDelete: 'CASCADE',
  })
  vacancy: Vacancy;

  // 🔹 источник отклика (hh, linkedin, referral и т.д.)
  @Column({ nullable: true })
  source?: string;

  // 🔹 статус кандидата в процессе найма
  @Column({
    type: 'enum',
    enum: ApplicationStatus,
    default: ApplicationStatus.APPLIED,
  })
  status: ApplicationStatus;

  // 🔹 насколько кандидат подходит (0–100)
  @Column({ type: 'int', nullable: true })
  fitScore?: number;

  // 🔹 дата отклика
  @Column({ type: 'timestamp' })
  appliedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}