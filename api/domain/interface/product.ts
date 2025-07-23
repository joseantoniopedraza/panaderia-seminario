import { ProductModel } from "../products";

export interface ProductsPersistence {
  findAll: (deps?: any) => () => Promise<Array<ProductModel | undefined>>;
  create: (
    deps?: any
  ) => (product: ProductModel) => Promise<ProductModel | undefined>;
}
