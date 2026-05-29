import { ConfigService } from "@nestjs/config";
import { AnalyzeDto } from "./dto/ai-analyze.dto";
import { CandidatesEntity } from "../entities/candidates.entity";
import { CandidateProfEntity } from "../entities/candidate-profile.entity";
import { Repository } from "typeorm";
import { CandidateProfDto } from "../dto/candidate-prof.dto";
import { VacancyEntity } from "../entities/vacancies.entity";
import { ApplicationEntity } from "../entities/application.entity";
export declare class AiService {
    private configService;
    private readonly candidateProfRepository;
    private readonly candidatesRepository;
    private readonly vacancyRepository;
    private readonly applicationRepository;
    private readonly apiKey;
    constructor(configService: ConfigService, candidateProfRepository: Repository<CandidateProfEntity>, candidatesRepository: Repository<CandidatesEntity>, vacancyRepository: Repository<VacancyEntity>, applicationRepository: Repository<ApplicationEntity>);
    askAboutCandidate(prompt: string): Promise<string>;
    AnalyzeCandidate(can_id: number): Promise<{
        analyze: AnalyzeDto;
        profile: CandidateProfDto;
    }>;
}
