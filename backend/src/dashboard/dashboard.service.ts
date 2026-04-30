import { Injectable, ParseIntPipe } from "@nestjs/common";
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
  fetchAndStoreHiringFunnel = async (setHiringFunnel) => {
    try {
      const [percentages, counts] = await this.hiringFunnel();
      setHiringFunnel({ percentages, counts });
    } catch (error) {
      console.error(error);
    }
  };

  async hiringFunnel() {
    const total = await this.candidateRepository.count();
    const statuses = [
      { key: "Новый", name: "newCandidate" },
      { key: "Скриннинг", name: "scrinning" },
      { key: "Проверка документов", name: "docsCheck" },
      { key: "Решение HR", name: "hrProcess" },
      { key: "Оформление", name: "regis" },
    ];
    const countsPromises = statuses.map((status) =>
      this.candidateRepository.count({ where: { current_status: status.key } }),
    );

    const countsArray = await Promise.all(countsPromises);
    const percentages = countsArray.map((value) =>
      Math.trunc((value / total) * 100),
    );
    return [percentages, countsArray];
  }
}
