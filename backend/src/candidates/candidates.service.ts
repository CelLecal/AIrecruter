import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './candidates.entity';

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(Candidate)
    private candidatesRepository: Repository<Candidate>,
  ) {}

  // GET all candidates
  async findAll(): Promise<Candidate[]> {
    return await this.candidatesRepository.find();
  }

  // GET candidate by id
  async findOne(id: number): Promise<Candidate | null> {
    return await this.candidatesRepository.findOne({
      where: { id },
    });
  }

  // GET candidate with relations (если добавишь связи)
  async findOneWithRelations(id: number): Promise<any> {
    const candidate = await this.candidatesRepository.findOne({
      where: { id },
      relations: ['applications', 'vacancy'], // 👈 если будут связи
    });

    if (!candidate) return null;

    return {
      ...candidate,
      application: candidate['applications'] || null,
      vacancyDetails: candidate['vacancy'] || null,
    };
  }
}