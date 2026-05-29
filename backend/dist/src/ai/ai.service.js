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
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ai_entity_1 = require("../entities/ai.entity");
const ai_analyze_dto_1 = require("./dto/ai-analyze.dto");
const candidates_entity_1 = require("../entities/candidates.entity");
const ai_settings_entity_1 = require("../entities/ai-settings.entity");
const candidate_profile_entity_1 = require("../entities/candidate-profile.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const candidate_prof_dto_1 = require("../dto/candidate-prof.dto");
const vacancies_entity_1 = require("../entities/vacancies.entity");
const application_entity_1 = require("../entities/application.entity");
let AiService = class AiService {
    configService;
    candidateProfRepository;
    candidatesRepository;
    vacancyRepository;
    applicationRepository;
    apiKey;
    constructor(configService, candidateProfRepository, candidatesRepository, vacancyRepository, applicationRepository) {
        this.configService = configService;
        this.candidateProfRepository = candidateProfRepository;
        this.candidatesRepository = candidatesRepository;
        this.vacancyRepository = vacancyRepository;
        this.applicationRepository = applicationRepository;
        this.apiKey = this.configService.get("DEEPSEEK_API_KEY");
    }
    async askAboutCandidate(prompt) {
        const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.apiKey}`,
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            }),
        });
        if (!response.ok) {
            throw new common_1.HttpException(`DeepSeek API Error: ${response.status}`, common_1.HttpStatus.BAD_GATEWAY);
        }
        const data = await response.json();
        return data.choices[0].message.content;
    }
    async AnalyzeCandidate(can_id) {
        const candidatesInfo = await this.candidatesRepository.findOneBy({
            id: can_id,
        });
        const profInfo = await this.candidateProfRepository.findOneBy({
            candidate_id: can_id,
        });
        const settings = await ai_settings_entity_1.SettingsEntity.findOneBy({
            is_active: true,
        });
        const candidates = await candidates_entity_1.CandidatesEntity.findOneBy({
            id: can_id,
        });
        const application = await this.applicationRepository.findOneBy({
            candidate_id: can_id,
        });
        const vacancy = await this.vacancyRepository.findOneBy({
            id: application.vacancy_id,
        });
        const [summaryText, fitAssessment, riskAssessment, recommendationText] = await Promise.all([
            this.askAboutCandidate("Напиши короткую сводку по кандидату. Без лишних слов и очень коротко. Его данные: Имя:" +
                candidatesInfo.full_name +
                "Дата рождения:" +
                candidatesInfo.birth_date +
                "Город:" +
                candidatesInfo.city +
                "Стаж работы:" +
                profInfo.experience_years +
                "Категория прав:" +
                profInfo.license_category +
                "Выбранный график работы:" +
                profInfo.work_schedule_preference +
                "Выбранная вакансия:" +
                vacancy.title +
                "Место работы:" +
                vacancy.location +
                "График:" +
                vacancy.shift_type +
                "Необходимая категория прав:" +
                vacancy.required_license_category +
                "Минималный опыт:" +
                vacancy.min_experience_years),
            this.askAboutCandidate("Оцени соответствие кандидата вакансии. Без лишних слов и очень коротко. Его данные: Имя:" +
                candidatesInfo.full_name +
                "Дата рождения:" +
                candidatesInfo.birth_date +
                "Город:" +
                candidatesInfo.city +
                "Стаж работы:" +
                profInfo.experience_years +
                "Категория прав:" +
                profInfo.license_category +
                "Выбранный график работы:" +
                profInfo.work_schedule_preference +
                "Выбранная вакансия:" +
                vacancy.title +
                "Место работы:" +
                vacancy.location +
                "График:" +
                vacancy.shift_type +
                "Необходимая категория прав:" +
                vacancy.required_license_category +
                "Минималный опыт:" +
                vacancy.min_experience_years),
            this.askAboutCandidate("Кратко опиши риски при найме этого кандидата на эту вакансию. Без лишних слов и очень коротко. Его данные: Имя:" +
                candidatesInfo.full_name +
                "Дата рождения:" +
                candidatesInfo.birth_date +
                "Город:" +
                candidatesInfo.city +
                "Стаж работы:" +
                profInfo.experience_years +
                "Категория прав:" +
                profInfo.license_category +
                "Выбранный график работы:" +
                profInfo.work_schedule_preference +
                "Выбранная вакансия:" +
                vacancy.title +
                "Место работы:" +
                vacancy.location +
                "График:" +
                vacancy.shift_type +
                "Необходимая категория прав:" +
                vacancy.required_license_category +
                "Минималный опыт:" +
                vacancy.min_experience_years),
            this.askAboutCandidate("Напиши рекомендации для HR по кандидату. Без лишних слов и очень коротко. Его данные: Имя:" +
                candidatesInfo.full_name +
                "Дата рождения:" +
                candidatesInfo.birth_date +
                "Город:" +
                candidatesInfo.city +
                "Стаж работы:" +
                profInfo.experience_years +
                "Категория прав:" +
                profInfo.license_category +
                "Выбранный график работы:" +
                profInfo.work_schedule_preference +
                "Выбранная вакансия:" +
                vacancy.title +
                "Место работы:" +
                vacancy.location +
                "График:" +
                vacancy.shift_type +
                "Необходимая категория прав:" +
                vacancy.required_license_category +
                "Минималный опыт:" +
                vacancy.min_experience_years),
        ]);
        await ai_entity_1.AiEntity.update({ candidate_id: candidates.id }, {
            summary_text: summaryText,
            fit_assessment: fitAssessment,
            risk_assessment: riskAssessment,
            recommendation_text: recommendationText,
            provider_code: settings.provider_code,
            model_name: settings.model_name,
        });
        await candidate_profile_entity_1.CandidateProfEntity.update({ candidate_id: candidates.id }, { ai_summary: summaryText, hr_recommendation: recommendationText });
        const resAnalyze = await ai_entity_1.AiEntity.findOneBy({
            candidate_id: candidates.id,
        });
        const resProfile = await candidate_profile_entity_1.CandidateProfEntity.findOneBy({
            candidate_id: candidates.id,
        });
        return {
            analyze: new ai_analyze_dto_1.AnalyzeDto(resAnalyze),
            profile: new candidate_prof_dto_1.CandidateProfDto(resProfile),
        };
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(candidate_profile_entity_1.CandidateProfEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(candidates_entity_1.CandidatesEntity)),
    __param(3, (0, typeorm_2.InjectRepository)(vacancies_entity_1.VacancyEntity)),
    __param(4, (0, typeorm_2.InjectRepository)(application_entity_1.ApplicationEntity)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], AiService);
//# sourceMappingURL=ai.service.js.map