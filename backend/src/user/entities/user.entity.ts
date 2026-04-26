import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';
import * as argon2 from 'argon2';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ default: 'name' })
  full_name!: string;

  @Column({ default: 'email' })
  email!: string;

  @Column({ default: 'password' })
  password_hash!: string;

  @Column({ default: 'role' })
  role_id!: string;

  @Column({ default: 'status' })
  status!: string;

  @CreateDateColumn({ default: '11-11-1111' })
  created_at!: Date;
}
