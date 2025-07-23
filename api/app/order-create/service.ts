
import { OrderModel } from "../../domain/orders";
import { dependencies, Service } from "./entities";

export function newService(d: dependencies): Service {
  return {
    d,
    create,
  };
}

export function create(this: Service) {
  return async (
    params: OrderModel
  ): Promise<OrderModel | undefined> => {
    const result = await this.d.ordersPersistence.create()(params);

    return result;
  };
}
