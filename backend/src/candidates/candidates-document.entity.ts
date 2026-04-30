import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Candidate } from './candidates.entity';

export enum DocumentType {
  PASSPORT = 'passport',
  DRIVER_LICENSE = 'driver_license',
  MEDICAL_BOOK = 'medical_book',
  OTHER = 'other',
}

@Entity('candidate_documents')
export class CandidateDocument {
  @PrimaryGeneratedColumn()
  id: number;

  // 🔹 связь many-to-one (у одного кандидата много документов)
  @ManyToOne(() => Candidate, (candidate) => candidate.id, {
    onDelete: 'CASCADE',
  })
  candidate: Candidate;

  // 🔹 тип документа
  @Column({
    type: 'enum',
    enum: DocumentType,
  })
  type: DocumentType;

  // 🔹 название файла (например: ivanov_passport.pdf)
  @Column()
  fileName: string;

  // 🔹 путь к файлу (если хранишь на сервере)
  @Column({ nullable: true })
  filePath?: string;

  // 🔹 дата загрузки
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}