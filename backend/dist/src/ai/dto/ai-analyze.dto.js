"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyzeDto = void 0;
class AnalyzeDto {
    candidate_id;
    summary_text;
    fit_assessment;
    risk_assessment;
    recommendation_text;
    provider_code;
    model_name;
    created_at;
    constructor(ent) {
        this.candidate_id = ent.candidate_id;
        this.summary_text = ent.summary_text;
        this.fit_assessment = ent.fit_assessment;
        this.risk_assessment = ent.risk_assessment;
        this.recommendation_text = ent.recommendation_text;
        this.provider_code = ent.provider_code;
        this.model_name = ent.model_name;
        this.created_at = ent.created_at;
    }
}
exports.AnalyzeDto = AnalyzeDto;
//# sourceMappingURL=ai-analyze.dto.js.map