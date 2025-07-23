import { Sequelize } from "sequelize";

export interface Service {
  sqlClient: Sequelize;
}
