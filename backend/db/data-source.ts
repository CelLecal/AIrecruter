import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm';
import { CandidateEntity } from '../src/candidates/entities/candidate.entity';
config();

export const createConnection: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  username: 'postgres',
  password: 'your_password',
  database: process.env.DB_NAME,
  port: 5432,
  entities: [CandidateEntity],
  migrations: ['dist/db/migrations/*.ts'],
  synchronize: true,
};

const dataSource = new DataSource(createConnection);

export default dataSource;
