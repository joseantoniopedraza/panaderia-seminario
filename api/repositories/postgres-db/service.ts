import { Service } from "./entities";
import { Sequelize } from "sequelize";

const createClient = () => {
  const config = {
    database: process.env.PGSQL_DB_NAME || "",
    username: process.env.PGSQL_DB_USERNAME || "",
    password: process.env.PGSQL_DB_PASSWORD || "",
    host: process.env.PGSQL_DB_HOST || "",
  };

  return new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: "postgres",
  });
};

export async function newClient(): Promise<Service> {
  const sqlClient = createClient();
  await sqlClient.authenticate();

  return {
    sqlClient,
  };
}
