import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacancyEntity } from './entities/vacancies.entity';
import { VacanciesService } from './vacancies.service';
import { VacanciesController } from './vacancies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VacancyEntity])],
  controllers: [VacanciesController],
  providers: [VacanciesService],
  exports: [VacanciesService],
})
export class VacanciesModule {}
