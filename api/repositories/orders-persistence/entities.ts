import { Model, ModelStatic } from "sequelize";
import { OrderModel } from "../../domain/orders";

export type dependencies = {
  orderTrxModel: ModelStatic<Model>;
  orderProductTrxModel: ModelStatic<Model>;
  productTrxModel: ModelStatic<Model>;
};

export interface Service {
  d: dependencies;
  findAll: (this: Service) => (id: number) => Promise<Array<OrderModel | undefined>>;
  create: (
    this: Service
  ) => (order: OrderModel) => Promise<OrderModel | undefined>;
}
