import { Injectable } from '@nestjs/common';

@Injectable()
export class VacanciesService {
  findAll() {
    return []; // потом подключишь БД
  }
}