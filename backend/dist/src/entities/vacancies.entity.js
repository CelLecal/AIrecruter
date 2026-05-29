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
exports.VacancyEntity = void 0;
const typeorm_1 = require("typeorm");
let VacancyEntity = class VacancyEntity extends typeorm_1.BaseEntity {
    id;
    title;
    department;
    location;
    shift_type;
    required_license_category;
    min_experience_years;
    status;
};
exports.VacancyEntity = VacancyEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VacancyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VacancyEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VacancyEntity.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VacancyEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VacancyEntity.prototype, "shift_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VacancyEntity.prototype, "required_license_category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VacancyEntity.prototype, "min_experience_years", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VacancyEntity.prototype, "status", void 0);
exports.VacancyEntity = VacancyEntity = __decorate([
    (0, typeorm_1.Entity)("vacancies")
], VacancyEntity);
//# sourceMappingURL=vacancies.entity.js.map