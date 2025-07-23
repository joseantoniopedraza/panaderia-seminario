"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDependencies = void 0;
const postgres_db_1 = require("./repositories/postgres-db");
const orders_persistence_1 = require("./repositories/orders-persistence");
const products_persistence_1 = require("./repositories/products-persistence");
const buildDependencies = async () => {
    const sqlClient = (await (0, postgres_db_1.newClient)()).sqlClient;
    return {
        ordersPersistence: (0, orders_persistence_1.newService)({ sqlClient }),
        productsPersistence: (0, products_persistence_1.newService)({ sqlClient }),
    };
};
exports.buildDependencies = buildDependencies;
//# sourceMappingURL=dependencies.js.map