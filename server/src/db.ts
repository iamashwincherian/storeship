import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

export const db = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: ["src/models/*.ts"],
  migrations: ["src/migrations/*.ts"],
  migrationsTableName: "migrations",
  logging: false,
});

db.initialize()
  .then(() => console.log("Database has been connected!"))
  .catch(() => console.error("Database connection has been failed!"));
