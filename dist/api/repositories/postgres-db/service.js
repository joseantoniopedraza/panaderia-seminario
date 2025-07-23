"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newClient = newClient;
const sequelize_1 = require("sequelize");
const createClient = () => {
    const config = {
        database: process.env.PGSQL_DB_NAME || "",
        username: process.env.PGSQL_DB_USERNAME || "",
        password: process.env.PGSQL_DB_PASSWORD || "",
        host: process.env.PGSQL_DB_HOST || "",
    };
    return new sequelize_1.Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: "postgres",
    });
};
async function newClient() {
    const sqlClient = createClient();
    await sqlClient.authenticate();
    return {
        sqlClient,
    };
}
//# sourceMappingURL=service.js.map