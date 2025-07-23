import * as productCreateModule from "./product-create";
import * as orderCreateModule from "./order-create";
import * as productListModule from "./products-list";
import * as orderListModule from "./order-list";

export type appServices = {
  productCreate: productCreateModule.Service;
  orderCreate: orderCreateModule.Service;
  productList: productListModule.Service;
  orderList: orderListModule.Service;
};

export type appDependencies = productCreateModule.dependencies &
  orderCreateModule.dependencies &
  productListModule.dependencies &
  orderListModule.dependencies;

export const buildServices = (dependencies: appDependencies): appServices => {
  const productCreate = productCreateModule.newService(dependencies);
  const orderCreate = orderCreateModule.newService(dependencies);
  const productList = productListModule.newService(dependencies);
  const orderList = orderListModule.newService(dependencies);

  return {
    productCreate,
    orderCreate,
    productList,
    orderList,
  };
};
