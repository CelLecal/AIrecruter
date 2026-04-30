import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('candidates')
export class Candidate {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  full_name!: string;

  @Column()
  vacancy!: string;

  @Column()
  profile!: string;
}