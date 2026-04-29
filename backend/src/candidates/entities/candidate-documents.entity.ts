import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity('candidate_documents')
export class CandidateDocsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 1 })
  candidate_id!: number;

  @Column({ default: 'type' })
  document_type!: string;

  @Column({ default: 'name' })
  file_name!: string;

  @Column({ default: 'path' })
  file_path!: string;

  @Column({ default: 'status' })
  upload_status!: string;

  @CreateDateColumn()
  uploaded_at!: Date;
}
