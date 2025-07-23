"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOrderTrxSqlModel = void 0;
const sequelize_1 = require("sequelize");
// pedidos(id, cliente, total, fecha)
const buildOrderTrxSqlModel = (sqlCLient) => sqlCLient.define("OrderTrx", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    client: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
});
exports.buildOrderTrxSqlModel = buildOrderTrxSqlModel;
//# sourceMappingURL=order-sql.js.map