"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateProfDto = void 0;
class CandidateProfDto {
    candidate_id;
    ai_summary;
    hr_recommendation;
    constructor(ent) {
        this.candidate_id = ent.candidate_id;
        this.ai_summary = ent.ai_summary;
        this.hr_recommendation = ent.hr_recommendation;
    }
}
exports.CandidateProfDto = CandidateProfDto;
//# sourceMappingURL=candidate-prof.dto.js.map