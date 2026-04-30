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
    return this.candidateRepository.count({
      where: {
        created_at: MoreThanOrEqual(dateThreshold),
      },
    });
  }
  async primarySelection() {
    return this.candidateRepository.count({
      where: {
        current_status: "Завершил чат-скриннинг",
      },
    });
  }
  async docVerif() {
    return this.candidateRepository.count({
      where: {
        current_status: "Требует проверки документов",
      },
    });
  }
  async readyForRegis() {
    return this.candidateRepository.count({
      where: {
        current_status: "Оформление",
      },
    });
  }
  async latestCandidates(days: number) {
    const dateThreshold = new Date();
    dateThreshold.setDate(dateThreshold.getDate() - days);
    return this.candidateRepository.find({
      select: ["current_status", "full_name"],
      where: {
        created_at: MoreThanOrEqual(dateThreshold),
      },
    });
  }

  async hiringFunnel() {
    const total = await this.candidateRepository.count();
    const newCandidate = await this.candidateRepository.count({
      where: { current_status: "Новый" },
    });
    const scrinning = await this.candidateRepository.count({
      where: { current_status: "Скриннинг" },
    });
    const docsCheck = await this.candidateRepository.count({
      where: { current_status: "Проверка документов" },
    });
    const hrProcess = await this.candidateRepository.count({
      where: { current_status: "Решение HR" },
    });
    const regis = await this.candidateRepository.count({
      where: { current_status: "Оформление" },
    });
    const count = [newCandidate, scrinning, docsCheck, hrProcess, regis];
    const percentages = count.map((percent) => (percent / 100) * total);
    return [percentages, count];
  }

  async getCombinedData(days: number = 7) {
    const newCount = await this.newCandidates(days);
    const primaryCount = await this.primarySelection();
    const verifCount = await this.docVerif();
    const readyCount = await this.readyForRegis();
    const [latestTotal] = await this.latestCandidates(days);
    const [funnelPercentages, funnelCount] = await this.hiringFunnel();
    return {
      newCandidates: {
        count: newCount,
      },
      primarySelection: {
        count: primaryCount,
      },
      documentVerification: {
        count: verifCount,
      },
      readyForRegistration: {
        count: readyCount,
      },
      latestCandidates: {
        total: latestTotal,
      },
      hiringFunnel: {
        percentages: funnelPercentages,
        count: funnelCount,
      },
    };
  }
}
