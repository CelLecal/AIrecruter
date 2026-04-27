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

  @Column()
  full_name!: string;

  @Column()
  email!: string;

  @Column()
  password_hash!: string;

  @Column()
  role_id!: string;

  @Column()
  status!: string;

  @CreateDateColumn()
  created_at!: Date;
}
