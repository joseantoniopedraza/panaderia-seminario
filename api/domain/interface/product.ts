import { ProductModel } from "../products";

export interface ProductsPersistence {
  create: (
    deps?: any
  ) => (product: ProductModel) => Promise<ProductModel | undefined>;
}
