import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MinLength } from 'class-validator';

@Entity()
export class User {
  //   @PrimaryGeneratedColumn()
  //   id: number;
  //   @Column({ unique: true })
  //   email: string;
  //   @Column()
  //   @MinLength(6, { message: 'Ваш пароль должен содержать не менее 6 символов' })
  //   password: string;
  //   @Column({ default: true })
  //   isActive: boolean;
}
