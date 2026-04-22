import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Candidate {
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
