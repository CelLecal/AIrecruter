import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity("candidate_documents")
export class CandidateDocsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  candidate_id!: number;

  @Column()
  document_type!: string;

  @Column()
  file_name!: string;

  @Column()
  file_path!: string;

  @Column()
  upload_status!: string;

  @CreateDateColumn()
  uploaded_at!: Date;
}
