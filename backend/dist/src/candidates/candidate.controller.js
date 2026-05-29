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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateDocumentsController = exports.CandidatesController = void 0;
const common_1 = require("@nestjs/common");
const candidate_service_1 = require("./candidate.service");
const create_candidate_dto_1 = require("../dto/create-candidate.dto");
const ai_service_1 = require("../ai/ai.service");
let CandidatesController = class CandidatesController {
    candidatesService;
    aiService;
    constructor(candidatesService, aiService) {
        this.candidatesService = candidatesService;
        this.aiService = aiService;
    }
    create(data) {
        return this.candidatesService.create(data);
    }
    getList() {
        return this.candidatesService.getList();
    }
    async getCandidateById(id) {
        const candidateId = parseInt(id);
        const candidate = await this.candidatesService.findCandidateById(candidateId);
        if (!candidate) {
            return { message: "Пользователь не найден" };
        }
        return candidate;
    }
    lastResult() {
        return this.candidatesService.lastResult();
    }
    async ask(id) {
        const response = await this.aiService.AnalyzeCandidate(id);
        return { response };
    }
};
exports.CandidatesController = CandidatesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_candidate_dto_1.CreateCandidateDto]),
    __metadata("design:returntype", void 0)
], CandidatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CandidatesController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "getCandidateById", null);
__decorate([
    (0, common_1.Get)(":id/ai-result"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CandidatesController.prototype, "lastResult", null);
__decorate([
    (0, common_1.Post)(":id/analyze-ai"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "ask", null);
exports.CandidatesController = CandidatesController = __decorate([
    (0, common_1.Controller)("candidates"),
    __metadata("design:paramtypes", [candidate_service_1.CandidatesService,
        ai_service_1.AiService])
], CandidatesController);
let CandidateDocumentsController = class CandidateDocumentsController {
    candidateService;
    constructor(candidateService) {
        this.candidateService = candidateService;
    }
    CandidateDocs(candidateId) {
        return this.candidateService.CandidateDocs(candidateId);
    }
};
exports.CandidateDocumentsController = CandidateDocumentsController;
__decorate([
    (0, common_1.Get)(":candidateId"),
    __param(0, (0, common_1.Param)("candidateId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CandidateDocumentsController.prototype, "CandidateDocs", null);
exports.CandidateDocumentsController = CandidateDocumentsController = __decorate([
    (0, common_1.Controller)("candidate-documents"),
    __metadata("design:paramtypes", [candidate_service_1.CandidatesService])
], CandidateDocumentsController);
//# sourceMappingURL=candidate.controller.js.map