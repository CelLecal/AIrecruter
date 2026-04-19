import { DataSource } from 'typeorm';
import { User } from './users/users.entity';

export default new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'your_password',
  database: 'your_db',

  entities: [User],
  migrations: ['src/migration/*.ts'],

  synchronize: false,
});