import { Entity, Column, CreateDateColumn, BaseEntity } from "typeorm";

@Entity("settings")
export class SettingsEntity extends BaseEntity {
  @Column()
  provider_code!: string;

  @Column()
  model_name!: string;

  @Column()
  api_key!: string;

  @Column()
  base_url!: string;

  @Column()
  is_active!: string;

  @CreateDateColumn()
  updated_at!: Date;
}
