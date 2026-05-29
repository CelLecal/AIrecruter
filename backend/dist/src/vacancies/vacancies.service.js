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
exports.VacanciesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const vacancies_entity_1 = require("../entities/vacancies.entity");
const vacancy_dto_1 = require("../dto/vacancy.dto");
let VacanciesService = class VacanciesService {
    vacanciesRepository;
    constructor(vacanciesRepository) {
        this.vacanciesRepository = vacanciesRepository;
    }
    async getList() {
        const vacancies = await this.vacanciesRepository.find();
        return vacancies.map((item) => new vacancy_dto_1.VacancyDto(item));
    }
};
exports.VacanciesService = VacanciesService;
exports.VacanciesService = VacanciesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(vacancies_entity_1.VacancyEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], VacanciesService);
//# sourceMappingURL=vacancies.service.js.map