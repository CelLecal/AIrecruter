import { BaseEntity } from "typeorm";
export declare class UserEntity extends BaseEntity {
    id: number;
    full_name: string;
    email: string;
    password_hash: string;
    role_id: number;
    status: string;
    created_at: Date;
}
