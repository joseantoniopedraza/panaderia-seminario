"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildProductTrxSqlModel = void 0;
const sequelize_1 = require("sequelize");
// productos(id, nombre, precio, descripcion)
const buildProductTrxSqlModel = (sqlCLient) => sqlCLient.define("ProductTrx", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
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
exports.buildProductTrxSqlModel = buildProductTrxSqlModel;
//# sourceMappingURL=product-sql.js.map