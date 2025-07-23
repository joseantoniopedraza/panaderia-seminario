import { ProductModel } from "../../domain/products";
import { dependencies, Service } from "./entities";

export function newService(d: dependencies): Service {
  return {
    d,
    findAll,
  };
}

export function findAll(this: Service) {
  return async (): Promise<Array<ProductModel | undefined>> => {
    const result = await this.d.productsPersistence.findAll()();

    return result;
  };
}
