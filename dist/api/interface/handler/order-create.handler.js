"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationRules = void 0;
const express_1 = require("express");
const validate_req_middleware_1 = require("../middlewares/validate-req.middleware");
const express_validator_1 = require("express-validator");
const validationRules = () => [
    (0, express_validator_1.body)("client").isString().notEmpty(),
    (0, express_validator_1.body)("total").isNumeric().notEmpty(),
];
exports.validationRules = validationRules;
const handler = (service) => async (req, res) => {
    const payload = {
        client: req.body.client,
        total: req.body.total,
    };
    const response = await service.create()(payload);
    return res.status(200).send(response);
};
exports.default = (service) => {
    const router = (0, express_1.Router)();
    router.use((0, exports.validationRules)());
    router.use(validate_req_middleware_1.validate);
    router.use(handler(service));
    return router;
};
//# sourceMappingURL=order-create.handler.js.map