import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("ai_provider_settings")
export class SettingsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  provider_code!: string;

  @Column()
  model_name!: string;

  @Column()
  api_key!: string;

  @Column()
  base_url!: string;

  @Column()
  is_active!: boolean;

  @UpdateDateColumn()
  updated_at!: Date;
}
