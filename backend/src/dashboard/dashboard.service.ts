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

  async countsArray() {
    const statuses = [
      { key: "Новый", name: "newCandidate" },
      { key: "Скриннинг", name: "scrinning" },
      { key: "Проверка документов", name: "docsCheck" },
      { key: "Решение HR", name: "hrProcess" },
      { key: "Оформление", name: "regis" },
    ];

    const results: number[] = [];

    for (const status of statuses) {
      const count = await this.candidateRepository.count({
        where: { current_status: status.key },
      });
      // Убрали this, так как results — локальная переменная
      results.push(count);
    }

    // Возвращаем результат (и при желании сохраняем в свойство класса)
    return results;
  }
}
