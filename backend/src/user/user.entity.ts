import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({default:''})
  full_name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password_hash!: string;

  @Column()
  role_id!: number;

  @Column({ type: 'varchar', default: 'active' })
  status!: string;

  @CreateDateColumn()
  created_at!: Date;
}