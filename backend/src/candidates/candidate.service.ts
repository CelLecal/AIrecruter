import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { CandidateDto } from './dto/candidate.dto';
import { ReturningResultsEntityUpdator } from 'typeorm/query-builder/ReturningResultsEntityUpdator.js';

@Injectable()
export class CandidatesService {
  create(data: CreateCandidateDto) {
    const candidate = new CandidateDto();
    candidate.id = data.id;
    candidate.full_name = data.full_name;
    candidate.phone = data.phone;
    candidate.email = data.email;
    candidate.birth_date = data.birth_date;
    candidate.city = data.city!;
    candidate.current_status = data.current_status;
    candidate.created_at = data.created_at;

    return candidate;
  }
  getCandidate() {
    return 'candidate';
  }
}
