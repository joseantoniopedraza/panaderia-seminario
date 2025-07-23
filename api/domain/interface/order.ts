import { OrderModel } from "../orders";

export interface OrdersPersistence {
  create: (
    deps?: any
  ) => (order: OrderModel) => Promise<OrderModel | undefined>;
}
