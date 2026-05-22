import {
  Entity,
  Column,
  CreateDateColumn,
  BaseEntity,
  PrimaryColumn,
} from "typeorm";

@Entity("ai_provider_settings")
export class SettingsEntity extends BaseEntity {
  @PrimaryColumn()
  provider_code!: string;

  @Column()
  model_name!: string;

  @Column()
  api_key!: string;

  @Column()
  base_url!: string;

  @Column()
  is_active!: boolean;

  @CreateDateColumn()
  updated_at!: Date;
}
