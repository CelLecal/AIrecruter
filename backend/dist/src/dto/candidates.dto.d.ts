import { CandidatesEntity } from "../entities/candidates.entity";
export declare class CandidatesDto {
    id: number;
    full_name: string;
    phone: string;
    email: string;
    birth_date: string;
    city: string;
    current_status: string;
    created_at: Date;
    constructor(ent: CandidatesEntity);
}
