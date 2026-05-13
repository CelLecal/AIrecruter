import { Entity, Column, CreateDateColumn, BaseEntity } from "typeorm";

@Entity("ai")
export class AiEntity extends BaseEntity {
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
