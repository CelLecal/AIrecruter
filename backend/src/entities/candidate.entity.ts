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
}
