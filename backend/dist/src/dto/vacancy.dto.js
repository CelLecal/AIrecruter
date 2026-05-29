"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacancyDto = void 0;
class VacancyDto {
    id;
    title;
    department;
    location;
    required_license_category;
    status;
    shift_type;
    min_experience_years;
    constructor(ent) {
        this.id = ent.id;
        this.title = ent.title;
        this.department = ent.department;
        this.location = ent.location;
        this.shift_type = ent.shift_type;
        this.min_experience_years = ent.min_experience_years;
        this.required_license_category = ent.required_license_category;
        this.status = ent.status;
    }
}
exports.VacancyDto = VacancyDto;
//# sourceMappingURL=vacancy.dto.js.map