// user-active-stats.view-entity.ts
import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
  name: "dashboard",
  expression: `SELECT * FROM dashboard`,
  synchronize: false,
})
export class DashboardEntity {
  @ViewColumn()
  new_candidates_count!: bigint;
  @ViewColumn()
  primary_selection_count!: bigint;
  @ViewColumn()
  document_verification_count!: bigint;
  @ViewColumn()
  ready_for_registration_count!: bigint;
  @ViewColumn()
  latest_candidates!: [];
  @ViewColumn()
  hiring_funnel!: [];
}
