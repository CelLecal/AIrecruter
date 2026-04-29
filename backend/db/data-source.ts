import { config } from 'dotenv';
import { DataSourceOptions, DataSource } from 'typeorm';
import { CandidateEntity } from '../src/candidates/entities/candidate.entity';
import { UserEntity } from '../src/user/entities/user.entity';
import { VacancyEntity } from '../src/vacancies/entities/vacancies.entity';
import { CandidateProfEntity } from '../src/candidates/entities/candidate-profile.entity';
import { CandidateDocsEntity } from '../src/candidates/entities/candidate-documents.entity';
config();

export const createConnection: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
  entities: [
    CandidateEntity,
    UserEntity,
    VacancyEntity,
    CandidateDocsEntity,
    CandidateProfEntity,
  ],
  migrations: ['dist/db/migrations/*.ts'],
  synchronize: true,
};

const dataSource = new DataSource(createConnection);

export default dataSource;
