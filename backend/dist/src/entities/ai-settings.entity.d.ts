import { BaseEntity } from "typeorm";
export declare class SettingsEntity extends BaseEntity {
    provider_code: string;
    model_name: string;
    api_key: string;
    base_url: string;
    is_active: boolean;
    updated_at: Date;
}
