import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { DashboardEntity } from "entities/dashboard.entity";

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(DashboardEntity)
    private readonly dashboardRepository: Repository<DashboardEntity>,
  ) {}
  async showDashboard() {
    const result = await this.dashboardRepository.find();
    return result.length > 0 ? result[0] : {};
  }
}
