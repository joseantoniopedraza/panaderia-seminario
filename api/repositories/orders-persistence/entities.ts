import { Model, ModelStatic, Sequelize } from "sequelize";
import { OrderModel } from "../../domain/orders";

export type dependencies = {
  sqlClient: Sequelize;
};

export type iDependencies = {
  orderTrxModel: ModelStatic<Model>;
  sqlClient: Sequelize;
};

export interface Service {
  d: iDependencies;
  create: (
    this: Service
  ) => (order: OrderModel) => Promise<OrderModel | undefined>;
}
