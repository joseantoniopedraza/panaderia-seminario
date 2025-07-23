import { OrdersPersistence } from "../../domain/interface/order";
import { OrderModel } from "../../domain/orders";

export type dependencies = {
  ordersPersistence: OrdersPersistence;
};

export interface Service {
  d: dependencies;
  create: (
    this: Service
  ) => (params: OrderModel) => Promise<OrderModel | undefined>;
}
