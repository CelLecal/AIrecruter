import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('vacancies')
export class Vacancy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  // отдел или направление (IT, HR, Sales и т.д.)
  @Column({ nullable: true })
  department?: string;

  // уровень вакансии
  @Column({ nullable: true })
  level?: string;

  // статус вакансии (open/closed)
  @Column({ default: 'open' })
  status: string;

  // зарплатный диапазон (упрощённо)
  @Column({ nullable: true })
  salaryMin?: number;

  @Column({ nullable: true })
  salaryMax?: number;

  // 🔹 связи можно подключить позже через Application entity
  // @OneToMany(() => Application, (app) => app.vacancy)
  // applications: Application[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}