import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity("candidates")
export class CandidateEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  full_name!: string;

  @Column()
  phone!: string;

  @Column()
  email!: string;

  @Column()
  birth_date!: string;

  @Column()
  city!: string;

  @Column()
  current_status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @Column({ nullable: true })
  license_category!: string;

  @Column({ nullable: true })
  experience_years!: number;

  @Column({ nullable: true })
  fit_score!: number;

  @Column({ nullable: true })
  risk_level!: string;


  @Column({ nullable: true })
  passport!: string;

  @Column({ nullable: true })
  birth_place!: string;

  @Column({ nullable: true })
  issue_date!: string;  
}
