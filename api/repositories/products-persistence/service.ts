import { buildProductTrxSqlModel } from "../../domain/sql/product-sql";
import { dependencies, Service } from "./entities";
import { create } from "./functions/create";

export function newService(d: dependencies): Service {
  const productTrxModel = buildProductTrxSqlModel(d.sqlClient);

  return {
    d: {
      ...d,
      productTrxModel,
    },
    create,
  };
}
