import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Candidate } from './candidates.entity';

@Entity('candidate_profiles')
export class CandidateProfile {
  @PrimaryGeneratedColumn()
  id: number;

  // 🔹 связь 1 к 1 с кандидатом
  @OneToOne(() => Candidate, { onDelete: 'CASCADE' })
  @JoinColumn()
  candidate: Candidate;

  // 🔹 контактные данные
  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  country?: string;

  // 🔹 профессиональные данные
  @Column({ type: 'text', nullable: true })
  experience?: string;

  @Column({ type: 'text', nullable: true })
  education?: string;

  @Column({ type: 'simple-array', nullable: true })
  skills?: string[];

  // 🔹 ссылки на портфолио / соцсети
  @Column({ nullable: true })
  linkedin?: string;

  @Column({ nullable: true })
  github?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}