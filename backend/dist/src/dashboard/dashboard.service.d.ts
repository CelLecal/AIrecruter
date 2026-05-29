import { Repository } from "typeorm";
import { DashboardEntity } from "../entities/dashboard.entity";
export declare class DashboardService {
    private readonly dashboardRepository;
    constructor(dashboardRepository: Repository<DashboardEntity>);
    showDashboard(): Promise<{}>;
}
