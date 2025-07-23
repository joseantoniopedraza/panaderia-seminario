import { buildOrderTrxSqlModel } from "../../domain/sql/order-sql";
import { dependencies, Service } from "./entities";
import { create } from "./functions/create";

export function newService(d: dependencies): Service {
  const orderTrxModel = buildOrderTrxSqlModel(d.sqlClient);

  return {
    d: {
      ...d,
      orderTrxModel,
    },
    create,
  };
}
