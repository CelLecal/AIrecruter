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
exports.DashboardEntity = void 0;
const typeorm_1 = require("typeorm");
let DashboardEntity = class DashboardEntity {
    new_candidates_count;
    primary_selection_count;
    document_verification_count;
    ready_for_registration_count;
    latest_candidates;
    hiring_funnel;
};
exports.DashboardEntity = DashboardEntity;
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", BigInt)
], DashboardEntity.prototype, "new_candidates_count", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", BigInt)
], DashboardEntity.prototype, "primary_selection_count", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", BigInt)
], DashboardEntity.prototype, "document_verification_count", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", BigInt)
], DashboardEntity.prototype, "ready_for_registration_count", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Array)
], DashboardEntity.prototype, "latest_candidates", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Array)
], DashboardEntity.prototype, "hiring_funnel", void 0);
exports.DashboardEntity = DashboardEntity = __decorate([
    (0, typeorm_1.ViewEntity)({
        name: "dashboard",
        expression: `SELECT * FROM dashboard`,
        synchronize: false,
    })
], DashboardEntity);
//# sourceMappingURL=dashboard.entity.js.map