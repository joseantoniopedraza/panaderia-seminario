import { appDependencies } from "./app";
import { newClient as newSqlClient } from "./repositories/postgres-db";
import { newService as newOrdersPersistence } from "./repositories/orders-persistence";
import { newService as newProductsPersistence } from "./repositories/products-persistence";

export const buildDependencies = async (): Promise<appDependencies> => {
  const sqlClient = (await newSqlClient()).sqlClient;

  return {
    ordersPersistence: newOrdersPersistence({ sqlClient }),
    productsPersistence: newProductsPersistence({ sqlClient }),
  };
};
