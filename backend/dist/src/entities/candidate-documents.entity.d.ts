import { BaseEntity } from "typeorm";
export declare class CandidateDocsEntity extends BaseEntity {
    id: number;
    candidate_id: number;
    document_type: string;
    file_name: string;
    file_path: string;
    upload_status: string;
    uploaded_at: Date;
}
