"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsDto = void 0;
class SettingsDto {
    provider_code;
    model_name;
    api_key;
    constructor(ent) {
        this.provider_code = ent.provider_code;
        this.model_name = ent.model_name;
        this.api_key = ent.api_key;
    }
}
exports.SettingsDto = SettingsDto;
//# sourceMappingURL=settings.dto.js.map