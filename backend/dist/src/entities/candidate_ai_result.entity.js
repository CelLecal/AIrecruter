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
exports.AiResultEntity = void 0;
const typeorm_1 = require("typeorm");
let AiResultEntity = class AiResultEntity extends typeorm_1.BaseEntity {
    id;
    candidate_id;
    summary_text;
    fit_assessment;
    risk_assessment;
    recommendation_text;
    provider_code;
    model_name;
    created_at;
};
exports.AiResultEntity = AiResultEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AiResultEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AiResultEntity.prototype, "candidate_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AiResultEntity.prototype, "summary_text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AiResultEntity.prototype, "fit_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AiResultEntity.prototype, "risk_assessment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AiResultEntity.prototype, "recommendation_text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AiResultEntity.prototype, "provider_code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AiResultEntity.prototype, "model_name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AiResultEntity.prototype, "created_at", void 0);
exports.AiResultEntity = AiResultEntity = __decorate([
    (0, typeorm_1.Entity)("candidate_ai_results")
], AiResultEntity);
//# sourceMappingURL=candidate_ai_result.entity.js.map