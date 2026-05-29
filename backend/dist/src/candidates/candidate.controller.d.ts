import { CandidatesService } from "./candidate.service";
import { CreateCandidateDto } from "../dto/create-candidate.dto";
import { AiService } from "../ai/ai.service";
export declare class CandidatesController {
    private readonly candidatesService;
    private readonly aiService;
    constructor(candidatesService: CandidatesService, aiService: AiService);
    create(data: CreateCandidateDto): Promise<import("../dto/candidates.dto").CandidatesDto>;
    getList(): Promise<import("../dto/candidates.dto").CandidatesDto[]>;
    getCandidateById(id: string): Promise<import("../dto/candidate-dto").CandidateDto | {
        message: string;
    }>;
    lastResult(): Promise<import("../entities/candidate_ai_result.entity").AiResultEntity>;
    ask(id: number): Promise<{
        response: {
            analyze: import("../ai/dto/ai-analyze.dto").AnalyzeDto;
            profile: import("../dto/candidate-prof.dto").CandidateProfDto;
        };
    }>;
}
export declare class CandidateDocumentsController {
    private readonly candidateService;
    constructor(candidateService: CandidatesService);
    CandidateDocs(candidateId: number): Promise<import("../dto/candidate-docs.dto").CandidateDocsDto[]>;
}
