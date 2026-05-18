import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity("candidate_ai_results")
export class AiResultEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  candidate_id!: number;

  @Column()
  summary_text!: string;

  @Column()
  fit_assessment!: string;

  @Column()
  risk_assessment!: string;

  @Column()
  recommendation_text!: string;

  @Column()
  provider_code!: string;

  @Column()
  model_name!: string;

  @CreateDateColumn()
  created_at!: Date;
}
