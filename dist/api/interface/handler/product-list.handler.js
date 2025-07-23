"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const handler = (service) => async (req, res) => {
    const response = await service.findAll()();
    return res.status(200).send(response);
};
exports.default = (service) => {
    const router = (0, express_1.Router)();
    router.use(handler(service));
    return router;
};
//# sourceMappingURL=product-list.handler.js.map