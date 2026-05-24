import { Injectable } from "@nestjs/common";
import { CreateCandidateDto } from "../dto/create-candidate.dto";
import { CandidateDto } from "../dto/candidates.dto";
import { CandidatesEntity } from "../entities/candidates.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { AiResultEntity } from "entities/candidate_ai_result.entity";

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(CandidatesEntity)
    private candidateRepository: Repository<CandidatesEntity>,
    @InjectRepository(AiResultEntity)
    private aiResultRepository: Repository<AiResultEntity>,
  ) {}

  async create(data: CreateCandidateDto) {
    const candidate = new CandidatesEntity();
    candidate.id = data.id;
    candidate.full_name = data.full_name;
    candidate.phone = data.phone;
    candidate.email = data.email;
    candidate.birth_date = data.birth_date;
    candidate.city = data.city!;
    candidate.current_status = data.current_status;
    candidate.created_at = data.created_at;

    const res = await candidate.save();
    return new CandidateDto(res);
  }

  async getList() {
    const candidates = await this.candidateRepository.find();
    return candidates.map((item) => new CandidateDto(item));
  }

  async findCandidateById(candidateId: number) {
    return this.candidateRepository.findOne({ where: { id: candidateId } });
  }

  async lastResult() {
    const result = await this.aiResultRepository.find({
      order: {
        id: "DESC",
      },
      take: 1,
    });
    return result[0]; // так как find возвращает массив
  }
}
