"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiModule = void 0;
const common_1 = require("@nestjs/common");
const ai_service_1 = require("./ai.service");
const ai_controller_1 = require("./ai.controller");
const config_1 = require("@nestjs/config");
const candidate_documents_entity_1 = require("../entities/candidate-documents.entity");
const candidate_profile_entity_1 = require("../entities/candidate-profile.entity");
const typeorm_1 = require("@nestjs/typeorm");
const candidates_entity_1 = require("../entities/candidates.entity");
const application_entity_1 = require("../entities/application.entity");
const vacancies_entity_1 = require("../entities/vacancies.entity");
let AiModule = class AiModule {
};
exports.AiModule = AiModule;
exports.AiModule = AiModule = __decorate([
    (0, common_1.Module)({
        providers: [ai_service_1.AiService],
        controllers: [ai_controller_1.AiController],
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forFeature([
                candidates_entity_1.CandidatesEntity,
                candidate_documents_entity_1.CandidateDocsEntity,
                candidate_profile_entity_1.CandidateProfEntity,
                vacancies_entity_1.VacancyEntity,
                application_entity_1.ApplicationEntity,
            ]),
        ],
    })
], AiModule);
//# sourceMappingURL=ai.module.js.map