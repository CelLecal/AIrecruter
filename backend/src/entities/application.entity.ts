import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity('applications')
export class ApplicationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: '1' })
  candidate_id!: number;

  @Column({ default: '1' })
  cvacancy_id!: string;

  @Column({ default: 'website' })
  application_source!: string;

  @Column({ default: 'not passed' })
  screening_status!: string;

  @Column({ default: '0' })
  fit_score!: string;

  @CreateDateColumn()
  aplied_at!: Date;
}
