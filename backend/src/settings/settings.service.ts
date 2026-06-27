import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SettingsEntity } from "entities/ai-settings.entity";
import { Repository } from "typeorm";
@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(SettingsEntity)
    private readonly settingsRepository: Repository<SettingsEntity>,
  ) {}

  async currentSettings() {
    return this.settingsRepository.find({
      where: { is_active: true },
    });
  }

  async saveProvSettings(id_num: string) {
    const id_number = Number(id_num);

    if (isNaN(id_number)) {
      throw new BadRequestException("Некорректный ID");
    }

    return await this.settingsRepository.manager.transaction(
      async (transactionalEntityManager) => {
        const provider = await transactionalEntityManager.findOne(
          SettingsEntity,
          {
            where: { id: id_number },
          },
        );

        if (!provider) {
          throw new NotFoundException(`Запись с ID ${id_num} не найдена`);
        }

        await transactionalEntityManager.update(
          SettingsEntity,
          { is_active: true },
          { is_active: false },
        );

        provider.is_active = true;
        return await transactionalEntityManager.save(SettingsEntity, provider);
      },
    );
  }

  async currentProv() {
    const provSettings = await SettingsEntity.find();
    return provSettings.map((settings) => ({
      id: settings.id,
      provider_code: settings.provider_code,
      model_name: settings.model_name,
    }));
  }
}
