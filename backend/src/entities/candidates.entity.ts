import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
  OneToOne,
} from "typeorm";

import { CandidateProfEntity } from "./candidate-profile.entity"; // Проверьте путь

@Entity("candidates")
export class CandidatesEntity extends BaseEntity {
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

  // Настройка связи: у кандидата есть один профиль
  @OneToOne(() => CandidateProfEntity, (profile) => profile.candidate)
  profile!: CandidateProfEntity;
}
