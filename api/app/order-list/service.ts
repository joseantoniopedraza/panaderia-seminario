import { OrderModel } from "../../domain/orders";
import { dependencies, Service } from "./entities";

export function newService(d: dependencies): Service {
  return {
    d,
    findAll,
  };
}

export function findAll(this: Service) {
  return async (id: number): Promise<Array<OrderModel | undefined>> => {
    const result = await this.d.ordersPersistence.findAll()(id);

    return result;
  };
}
