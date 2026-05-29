"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateDocsDto = void 0;
class CandidateDocsDto {
    id;
    candidate_id;
    document_type;
    file_name;
    file_path;
    upload_status;
    uploaded_at;
    constructor(ent) {
        this.id = ent.id;
        this.candidate_id = ent.candidate_id;
        this.document_type = ent.document_type;
        this.file_name = ent.file_name;
        this.file_path = ent.file_path;
        this.upload_status = ent.upload_status;
        this.uploaded_at = ent.uploaded_at;
    }
}
exports.CandidateDocsDto = CandidateDocsDto;
//# sourceMappingURL=candidate-docs.dto.js.map