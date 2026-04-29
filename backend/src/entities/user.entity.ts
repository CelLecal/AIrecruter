import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

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

  @CreateDateColumn()
  created_at!: Date;
}
