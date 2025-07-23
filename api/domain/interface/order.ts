import { OrderModel } from "../orders";

export interface OrdersPersistence {
  findAll: (deps?: any) => (id: number) => Promise<Array<OrderModel | undefined>>;
  create: (
    deps?: any
  ) => (order: OrderModel) => Promise<OrderModel | undefined>;
}
