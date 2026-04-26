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
  id!: string;

  @Column({ default: 'name' })
  full_name!: string;

  @Column({ default: 'phone' })
  phone!: string;

  @Column({ default: 'email' })
  email!: string;

  @Column({ default: '00-00-0000' })
  birth_date!: string;

  @Column({ default: 'city' })
  city!: string;

  @Column({ default: 'status' })
  current_status!: string;

  @CreateDateColumn({ default: '11-11-1111' })
  created_at!: Date;
}
