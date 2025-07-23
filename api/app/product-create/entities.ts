import { ProductsPersistence } from "../../domain/interface/product";
import { ProductModel } from "../../domain/products";

export type dependencies = {
  productsPersistence: ProductsPersistence;
};

export interface Service {
  d: dependencies;
  create: (
    this: Service
  ) => (params: ProductModel) => Promise<ProductModel | undefined>;
}
