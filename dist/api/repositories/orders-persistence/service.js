"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newService = newService;
const order_sql_1 = require("../../domain/sql/order-sql");
const create_1 = require("./functions/create");
function newService(d) {
    const orderTrxModel = (0, order_sql_1.buildOrderTrxSqlModel)(d.sqlClient);
    return {
        d: {
            ...d,
            orderTrxModel,
        },
        create: create_1.create,
    };
}
//# sourceMappingURL=service.js.map