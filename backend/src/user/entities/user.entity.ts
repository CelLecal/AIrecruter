import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MinLength } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string; // храним хэш пароля

  @Column({ default: true })
  isActive: boolean;
}
