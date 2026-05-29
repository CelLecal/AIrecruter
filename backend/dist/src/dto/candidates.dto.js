"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatesDto = void 0;
class CandidatesDto {
    id;
    full_name;
    phone;
    email;
    birth_date;
    city;
    current_status;
    created_at;
    constructor(ent) {
        this.id = ent.id;
        this.full_name = ent.full_name;
        this.phone = ent.phone;
        this.email = ent.email;
        this.birth_date = ent.birth_date;
        this.city = ent.city;
        this.current_status = ent.current_status;
        this.created_at = ent.created_at;
    }
}
exports.CandidatesDto = CandidatesDto;
//# sourceMappingURL=candidates.dto.js.map