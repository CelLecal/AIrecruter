"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateDocsEntity = void 0;
const typeorm_1 = require("typeorm");
let CandidateDocsEntity = class CandidateDocsEntity extends typeorm_1.BaseEntity {
    id;
    candidate_id;
    document_type;
    file_name;
    file_path;
    upload_status;
    uploaded_at;
};
exports.CandidateDocsEntity = CandidateDocsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CandidateDocsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CandidateDocsEntity.prototype, "candidate_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CandidateDocsEntity.prototype, "document_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CandidateDocsEntity.prototype, "file_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CandidateDocsEntity.prototype, "file_path", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CandidateDocsEntity.prototype, "upload_status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CandidateDocsEntity.prototype, "uploaded_at", void 0);
exports.CandidateDocsEntity = CandidateDocsEntity = __decorate([
    (0, typeorm_1.Entity)("candidate_documents")
], CandidateDocsEntity);
//# sourceMappingURL=candidate-documents.entity.js.map