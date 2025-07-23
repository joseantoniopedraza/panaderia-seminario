import { OrdersPersistence } from "../../domain/interface/order";
import { OrderModel } from "../../domain/orders";

export type dependencies = {
  ordersPersistence: OrdersPersistence;
};

export interface Service {
  d: dependencies;
  findAll: (this: Service) => (id: number) => Promise<Array<OrderModel | undefined>>;
}
