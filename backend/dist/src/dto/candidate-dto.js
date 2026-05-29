"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateDto = void 0;
class CandidateDto {
    id;
    full_name;
    phone;
    email;
    birth_date;
    city;
    current_status;
    created_at;
    candidate_id;
    license_category;
    experience_years;
    work_schedule_preference;
    hiring_score;
    risk_level;
    ai_summary;
    hr_recommendation;
    constructor(canEnt, profEnt) {
        this.id = canEnt.id;
        this.full_name = canEnt.full_name;
        this.phone = canEnt.phone;
        this.email = canEnt.email;
        this.birth_date = canEnt.birth_date;
        this.city = canEnt.city;
        this.current_status = canEnt.current_status;
        this.created_at = canEnt.created_at;
        this.candidate_id = profEnt.candidate_id;
        this.license_category = profEnt.license_category;
        this.experience_years = profEnt.experience_years;
        this.work_schedule_preference = profEnt.work_schedule_preference;
        this.hiring_score = profEnt.hiring_score;
        this.risk_level = profEnt.risk_level;
        this.ai_summary = profEnt.ai_summary;
        this.hr_recommendation = profEnt.hr_recommendation;
    }
}
exports.CandidateDto = CandidateDto;
//# sourceMappingURL=candidate-dto.js.map