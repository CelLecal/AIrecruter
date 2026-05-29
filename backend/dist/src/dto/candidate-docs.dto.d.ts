import { CandidateDocsEntity } from "../entities/candidate-documents.entity";
export declare class CandidateDocsDto {
    id: number;
    candidate_id: number;
    document_type: string;
    file_name: string;
    file_path: string;
    upload_status: string;
    uploaded_at: Date;
    constructor(ent: CandidateDocsEntity);
}
