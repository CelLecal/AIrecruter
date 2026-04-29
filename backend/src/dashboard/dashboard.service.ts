import { Injectable } from "@nestjs/common";
import { CandidateEntity } from "../entities/candidate.entity";
import { Repository, MoreThanOrEqual } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(CandidateEntity)
    private readonly candidateRepository: Repository<CandidateEntity>,
  ) {}
  async newCandidates(days: number) {
    const dateThreshold = new Date();
    dateThreshold.setDate(dateThreshold.getDate() - days);
    return this.candidateRepository.find({
      where: {
        created_at: MoreThanOrEqual(dateThreshold),
      },
    });
  }
  async primarySelection() {
    return this.candidateRepository.findAndCount({
      where: {
        current_status: "screening",
      },
    });
  }
  async docVerif() {
    return this.candidateRepository.findAndCount({
      where: {
        current_status: "docVerify",
      },
    });
  }
  async readyForRegis() {
    return this.candidateRepository.findAndCount({
      where: {
        current_status: "ready",
      },
    });
  }
  //тут будет ещё последние кандидаты и их статус, я потом разберусь
  async getCombinedData(days: number = 7) {
    const [newCandidates] = await this.newCandidates(days);
    const [primaryTotal] = await this.primarySelection();
    const [verifTotal] = await this.docVerif();
    const [readyTotal] = await this.readyForRegis();
    return {
      newCandidates,
      primarySelection: {
        total: primaryTotal,
      },
      documentVerification: {
        total: verifTotal,
      },
      readyForRegistration: {
        total: readyTotal,
      },
    };
  }
}
