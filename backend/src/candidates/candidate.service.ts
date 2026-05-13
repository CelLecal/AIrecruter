import { Injectable } from "@nestjs/common";
import { CreateCandidateDto } from "./dto/create-candidate.dto";
import { CandidateDto } from "./dto/candidate.dto";
import { CandidateEntity } from "../entities/candidate.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(CandidateEntity)
    private candidateRepository: Repository<CandidateEntity>,
  ) {}

  async create(data: CreateCandidateDto) {
    const candidate = new CandidateEntity();
    candidate.id = data.id;
    candidate.full_name = data.full_name;
    candidate.phone = data.phone;
    candidate.email = data.email;
    candidate.birth_date = data.birth_date;
    candidate.city = data.city!;
    candidate.current_status = data.current_status;
    candidate.created_at = data.created_at;

    const res = await candidate.save();
    return new CandidateDto(res);
  }
                                                               
  async getList() {                                             
    const candidates = await this.candidateRepository.find();   
    return candidates.map((item) => new CandidateDto(item));  
  }                                                           

  async findCandidateById(candidateId: number) {
    return this.candidateRepository.findOne({ where: { id: candidateId } });
  }
}

/* -------------------------------------ЭТО БЫЛИ ВРЕМЕННЫЕ МОКОВЫЕ ДАННЫЕ--------------------------------------------*/
/*import { Injectable } from "@nestjs/common";
import { CreateCandidateDto } from "./dto/create-candidate.dto";

@Injectable()
export class CandidatesService {
 
  private mockCandidates = [
    { id: 1, full_name: 'Миронов Сергей Иванович', city: 'Москва', current_status: 'Скрининг', fit_score: 92, experience_years: 8, risk_level: 'Низкий риск' },
    { id: 2, full_name: 'Кульков Владислав Павлович', city: 'Санкт-Петербург', current_status: 'Проверка документов', fit_score: 78, license_category: 'C, D', experience_years: 5, risk_level: 'Средний риск' },
    { id: 3, full_name: 'Козлова Екатерина Дмитриевна', city: 'Казань', current_status: 'Скрининг', fit_score: 95, license_category: 'B, C', experience_years: 3, risk_level: 'Низкий риск' },
    { id: 4, full_name: 'Леонова Зоя Борисовна', city: 'Химки', current_status: 'Новый', fit_score: 97, license_category: 'B, C', experience_years: 7, risk_level: 'Низкий риск' },
    { id: 5, full_name: 'Сидорова Елена Сергеевна', city: 'Ярославль', current_status: 'Скрининг', fit_score: 71, license_category: 'А, В', experience_years: 2, risk_level: 'Высокий риск' },
    { id: 6, full_name: 'Трусов Глеб Андревич', city: 'Москва', current_status: 'Скрининг', fit_score: 89, license_category: 'B, C', experience_years: 5, risk_level: 'Низкий риск' }
  ];

  async create(data: CreateCandidateDto) {

    const newId = this.mockCandidates.length + 1;
    return Object.assign({ id: newId }, data);
  }

  async getList() {
    return this.mockCandidates;
  }

  async findCandidateById(candidateId: number) {
    return this.mockCandidates.find(c => c.id === candidateId) || null;
  }
}*/
