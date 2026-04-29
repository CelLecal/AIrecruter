import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacancyEntity } from './entities/vacancies.entity';
import { VacanciesService } from './vacancies.service';

@Module({
  imports: [TypeOrmModule.forFeature([VacancyEntity])],
  controllers: [VacaciesController],
  providers: [VacanciesService],
  exports: [VacanciesService, VacaciesController],
})
export class CandidatesModule {}
export class AppModule {}
