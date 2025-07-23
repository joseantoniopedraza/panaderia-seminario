import * as productCreateModule from "./product-create";
import * as orderCreateModule from "./order-create";
import * as productListModule from "./products-list";

export type appServices = {
  productCreate: productCreateModule.Service;
  orderCreate: orderCreateModule.Service;
  productList: productListModule.Service;
};

export type appDependencies = productCreateModule.dependencies &
  orderCreateModule.dependencies &
  productListModule.dependencies;

export const buildServices = (dependencies: appDependencies): appServices => {
  const productCreate = productCreateModule.newService(dependencies);
  const orderCreate = orderCreateModule.newService(dependencies);
  const productList = productListModule.newService(dependencies);

  return {
    productCreate,
    orderCreate,
    productList,
  };
};
