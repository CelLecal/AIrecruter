import { DataSource } from 'typeorm';
import { seedUsers } from './users.seed';
import { AppDataSource } from '../../data-source';

async function run() {
  const dataSource = await AppDataSource.initialize();

  await seedUsers(dataSource);

  await dataSource.destroy();
}

run();