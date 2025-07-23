import { ProductModel } from "../../domain/products";
import { Model, ModelStatic, Sequelize } from "sequelize";

export type dependencies = {
  sqlClient: Sequelize;
};

export type iDependencies = {
  productTrxModel: ModelStatic<Model>;
  sqlClient: Sequelize;
};

export interface Service {
  d: iDependencies;
  findAll: (this: Service) => () => Promise<Array<ProductModel | undefined>>;
  create: (
    this: Service
  ) => (product: ProductModel) => Promise<ProductModel | undefined>;
}
