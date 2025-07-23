import { appDependencies } from "./app";
import { newClient as newSqlClient } from "./repositories/postgres-db";
import { newService as newOrdersPersistence } from "./repositories/orders-persistence";
import { newService as newProductsPersistence } from "./repositories/products-persistence";
import { buildOrderTrxSqlModel } from "./domain/sql/order-sql";
import { buildProductTrxSqlModel } from "./domain/sql/product-sql";
import { buildOrderProductTrxSqlModel } from "./domain/sql/order-products-sql";

export const buildDependencies = async (): Promise<appDependencies> => {
  const sqlClient = (await newSqlClient()).sqlClient;

  sqlClient.sync();
  const orderTrxModel = buildOrderTrxSqlModel(sqlClient);
  const productTrxModel = buildProductTrxSqlModel(sqlClient);
  const orderProductTrxModel = buildOrderProductTrxSqlModel(sqlClient);

  return {
    ordersPersistence: newOrdersPersistence({
      orderTrxModel,
      orderProductTrxModel,
      productTrxModel
    }),
    productsPersistence: newProductsPersistence({ productTrxModel }),
  };
};
