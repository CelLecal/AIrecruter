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
exports.CandidateProfEntity = void 0;
const typeorm_1 = require("typeorm");
let CandidateProfEntity = class CandidateProfEntity extends typeorm_1.BaseEntity {
    id;
    candidate_id;
    license_category;
    experience_years;
    work_schedule_preference;
    hiring_score;
    risk_level;
    ai_summary;
    hr_recommendation;
};
exports.CandidateProfEntity = CandidateProfEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CandidateProfEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CandidateProfEntity.prototype, "candidate_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CandidateProfEntity.prototype, "license_category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CandidateProfEntity.prototype, "experience_years", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CandidateProfEntity.prototype, "work_schedule_preference", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CandidateProfEntity.prototype, "hiring_score", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CandidateProfEntity.prototype, "risk_level", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CandidateProfEntity.prototype, "ai_summary", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CandidateProfEntity.prototype, "hr_recommendation", void 0);
exports.CandidateProfEntity = CandidateProfEntity = __decorate([
    (0, typeorm_1.Entity)("candidate_profiles")
], CandidateProfEntity);
//# sourceMappingURL=candidate-profile.entity.js.map