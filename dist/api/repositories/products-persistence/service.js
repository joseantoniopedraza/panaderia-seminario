"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newService = newService;
const product_sql_1 = require("../../domain/sql/product-sql");
const create_1 = require("./functions/create");
const find_all_1 = require("./functions/find-all");
function newService(d) {
    const productTrxModel = (0, product_sql_1.buildProductTrxSqlModel)(d.sqlClient);
    return {
        d: {
            ...d,
            productTrxModel,
        },
        create: create_1.create,
        findAll: find_all_1.findAll,
    };
}
//# sourceMappingURL=service.js.map