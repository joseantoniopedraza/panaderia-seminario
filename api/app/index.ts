import * as productCreateModule from "./product-create";
import * as orderCreateModule from "./order-create";

export type appServices = {
  productCreate: productCreateModule.Service;
  orderCreate: orderCreateModule.Service;
};

export type appDependencies = productCreateModule.dependencies &
  orderCreateModule.dependencies;

export const buildServices = (dependencies: appDependencies): appServices => {
  const productCreate = productCreateModule.newService(dependencies);
  const orderCreate = orderCreateModule.newService(dependencies);

  return {
    productCreate,
    orderCreate,
  };
};
