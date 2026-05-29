import { CreateCandidateDto } from "../dto/create-candidate.dto";
import { CandidatesDto } from "../dto/candidates.dto";
import { CandidatesEntity } from "../entities/candidates.entity";
import { Repository } from "typeorm";
import { AiResultEntity } from "../entities/candidate_ai_result.entity";
import { CandidateDocsEntity } from "../entities/candidate-documents.entity";
import { CandidateDocsDto } from "../dto/candidate-docs.dto";
import { CandidateProfEntity } from "../entities/candidate-profile.entity";
import { CandidateDto } from "../dto/candidate-dto";
export declare class CandidatesService {
    private candidateRepository;
    private aiResultRepository;
    private candidateDocsRepository;
    private candidateProfRepository;
    constructor(candidateRepository: Repository<CandidatesEntity>, aiResultRepository: Repository<AiResultEntity>, candidateDocsRepository: Repository<CandidateDocsEntity>, candidateProfRepository: Repository<CandidateProfEntity>);
    create(data: CreateCandidateDto): Promise<CandidatesDto>;
    getList(): Promise<CandidatesDto[]>;
    findCandidateById(candidateId: number): Promise<CandidateDto>;
    lastResult(): Promise<AiResultEntity>;
    CandidateDocs(candidateId: number): Promise<CandidateDocsDto[]>;
}
