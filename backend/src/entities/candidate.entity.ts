import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity('candidates')
export class CandidateEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 'name' })
  full_name!: string;

  @Column({ default: 'phone' })
  phone!: string;

  @Column({ default: 'email' })
  email!: string;

  @Column({ default: 'date' })
  birth_date!: string;

  @Column({ default: 'city' })
  city!: string;

  @Column({ default: 'status' })
  current_status!: string;

  @CreateDateColumn()
  created_at!: Date;
}
