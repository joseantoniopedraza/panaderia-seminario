"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_1 = require("../app");
const order_create_handler_1 = __importDefault(require("./handler/order-create.handler"));
const product_create_handler_1 = __importDefault(require("./handler/product-create.handler"));
const product_list_handler_1 = __importDefault(require("./handler/product-list.handler"));
exports.default = (dependencies) => {
    const router = (0, express_1.Router)();
    const services = (0, app_1.buildServices)(dependencies);
    router.post("/order", (0, order_create_handler_1.default)(services.orderCreate));
    router.post("/product", (0, product_create_handler_1.default)(services.productCreate));
    router.get("/products", (0, product_list_handler_1.default)(services.productList));
    return router;
};
//# sourceMappingURL=index.js.map