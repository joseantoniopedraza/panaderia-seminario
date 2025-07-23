
import { ProductModel } from "../../domain/products";
import { dependencies, Service } from "./entities";

export function newService(d: dependencies): Service {
  return {
    d,
    create,
  };
}

export function create(this: Service) {
  return async (
    params: ProductModel
  ): Promise<ProductModel | undefined> => {
    const result = await this.d.productsPersistence.create()(params);

    return result;
  };
}
