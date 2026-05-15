import { DataSource } from 'typeorm';
import { seedUsers } from './users.seed';
import { AppDataSource } from '../../data-source';
console.log({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  db: process.env.DB_NAME,
});
async function run() {
  const dataSource = await AppDataSource.initialize();

  await seedUsers(dataSource);

  await dataSource.destroy();
}

run();