import { Injectable } from '@nestjs/common';

@Injectable()
export class CandidatesService {
  getCandidate(): string {
    return 'Candidates';
  }
}
