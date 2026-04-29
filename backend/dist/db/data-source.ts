import { config } from "dotenv";
import { DataSourceOptions, DataSource } from "typeorm";
config();

export const createConnection: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  username: "postgres",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  entities: ["src/entities/**/*.entity.ts"],
  synchronize: true,
};

const dataSource = new DataSource(createConnection);

export default dataSource;
