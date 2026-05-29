"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatesModule = void 0;
const common_1 = require("@nestjs/common");
const candidate_service_1 = require("./candidate.service");
const candidate_controller_1 = require("./candidate.controller");
const typeorm_1 = require("@nestjs/typeorm");
const candidates_entity_1 = require("../entities/candidates.entity");
const candidate_ai_result_entity_1 = require("../entities/candidate_ai_result.entity");
const ai_entity_1 = require("../entities/ai.entity");
const ai_service_1 = require("../ai/ai.service");
const candidate_profile_entity_1 = require("../entities/candidate-profile.entity");
const candidate_documents_entity_1 = require("../entities/candidate-documents.entity");
const vacancies_entity_1 = require("../entities/vacancies.entity");
const application_entity_1 = require("../entities/application.entity");
let CandidatesModule = class CandidatesModule {
};
exports.CandidatesModule = CandidatesModule;
exports.CandidatesModule = CandidatesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                candidates_entity_1.CandidatesEntity,
                candidate_ai_result_entity_1.AiResultEntity,
                ai_entity_1.AiEntity,
                candidate_profile_entity_1.CandidateProfEntity,
                candidate_documents_entity_1.CandidateDocsEntity,
                vacancies_entity_1.VacancyEntity,
                application_entity_1.ApplicationEntity,
            ]),
        ],
        controllers: [candidate_controller_1.CandidatesController, candidate_controller_1.CandidateDocumentsController],
        providers: [candidate_service_1.CandidatesService, ai_service_1.AiService],
        exports: [candidate_service_1.CandidatesService],
    })
], CandidatesModule);
//# sourceMappingURL=candidate.module.js.map