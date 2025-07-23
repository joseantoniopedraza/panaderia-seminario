import { Router } from "express";
import { appDependencies, buildServices } from "../app";
import orderCreateHandler from "./handler/order-create.handler";
import productCreateHandler from "./handler/product-create.handler";
import productListHandler from "./handler/product-list.handler";

export default (dependencies: appDependencies): Router => {
  const router = Router();

  const services = buildServices(dependencies);

  router.post("/order", orderCreateHandler(services.orderCreate));
  router.post("/product", productCreateHandler(services.productCreate));
  router.get("/products", productListHandler(services.productList));

  return router;
};
