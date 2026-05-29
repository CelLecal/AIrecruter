import { BaseEntity } from "typeorm";
export declare class CandidatesEntity extends BaseEntity {
    id: number;
    full_name: string;
    phone: string;
    email: string;
    birth_date: string;
    city: string;
    current_status: string;
    created_at: Date;
}
