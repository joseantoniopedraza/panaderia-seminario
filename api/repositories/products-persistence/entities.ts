import { ProductModel } from "../../domain/products";
import { Model, ModelStatic, Sequelize } from "sequelize";

export type dependencies = {
  productTrxModel: ModelStatic<Model>;
};


export interface Service {
  d: dependencies;
  findAll: (this: Service) => () => Promise<Array<ProductModel | undefined>>;
  create: (
    this: Service
  ) => (product: ProductModel) => Promise<ProductModel | undefined>;
}
