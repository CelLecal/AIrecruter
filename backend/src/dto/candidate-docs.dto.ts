import { CandidateDocsEntity } from "entities/candidate-documents.entity";

export class CandidateDocsDto {
  id!: number;
  candidate_id!: number;
  document_type!: string;
  file_name!: string;
  file_path!: string;
  upload_status!: string;
  uploaded_at!: Date;

  constructor(ent: CandidateDocsEntity) {
    this.id = ent.id;
    this.candidate_id = ent.candidate_id;
    this.document_type = ent.document_type;
    this.file_name = ent.file_name;
    this.file_path = ent.file_path;
    this.upload_status = ent.upload_status;
    this.uploaded_at = ent.uploaded_at;
  }
}
