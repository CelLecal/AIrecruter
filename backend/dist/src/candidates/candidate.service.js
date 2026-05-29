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
exports.CandidatesService = void 0;
const common_1 = require("@nestjs/common");
const candidates_dto_1 = require("../dto/candidates.dto");
const candidates_entity_1 = require("../entities/candidates.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const candidate_ai_result_entity_1 = require("../entities/candidate_ai_result.entity");
const candidate_documents_entity_1 = require("../entities/candidate-documents.entity");
const candidate_docs_dto_1 = require("../dto/candidate-docs.dto");
const candidate_profile_entity_1 = require("../entities/candidate-profile.entity");
const candidate_dto_1 = require("../dto/candidate-dto");
let CandidatesService = class CandidatesService {
    candidateRepository;
    aiResultRepository;
    candidateDocsRepository;
    candidateProfRepository;
    constructor(candidateRepository, aiResultRepository, candidateDocsRepository, candidateProfRepository) {
        this.candidateRepository = candidateRepository;
        this.aiResultRepository = aiResultRepository;
        this.candidateDocsRepository = candidateDocsRepository;
        this.candidateProfRepository = candidateProfRepository;
    }
    async create(data) {
        const candidate = new candidates_entity_1.CandidatesEntity();
        candidate.id = data.id;
        candidate.full_name = data.full_name;
        candidate.phone = data.phone;
        candidate.email = data.email;
        candidate.birth_date = data.birth_date;
        candidate.city = data.city;
        candidate.current_status = data.current_status;
        candidate.created_at = data.created_at;
        const res = await candidate.save();
        return new candidates_dto_1.CandidatesDto(res);
    }
    async getList() {
        const candidates = await this.candidateRepository.find();
        return candidates.map((item) => new candidates_dto_1.CandidatesDto(item));
    }
    async findCandidateById(candidateId) {
        const candidate = await this.candidateRepository.findOne({
            where: { id: candidateId },
        });
        const profile = await this.candidateProfRepository.findOne({
            where: { candidate_id: candidateId },
        });
        return new candidate_dto_1.CandidateDto(candidate, profile);
    }
    async lastResult() {
        const result = await this.aiResultRepository.find({
            order: {
                id: "DESC",
            },
            take: 1,
        });
        return result[0];
    }
    async CandidateDocs(candidateId) {
        const candidateDocs = await this.candidateDocsRepository.findBy({
            candidate_id: candidateId,
        });
        return candidateDocs.map((item) => new candidate_docs_dto_1.CandidateDocsDto(item));
    }
};
exports.CandidatesService = CandidatesService;
exports.CandidatesService = CandidatesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(candidates_entity_1.CandidatesEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(candidate_ai_result_entity_1.AiResultEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(candidate_documents_entity_1.CandidateDocsEntity)),
    __param(3, (0, typeorm_2.InjectRepository)(candidate_profile_entity_1.CandidateProfEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], CandidatesService);
//# sourceMappingURL=candidate.service.js.map