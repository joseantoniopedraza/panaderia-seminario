"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newService = newService;
exports.create = create;
function newService(d) {
    return {
        d,
        create,
    };
}
function create() {
    return async (params) => {
        const result = await this.d.productsPersistence.create()(params);
        return result;
    };
}
//# sourceMappingURL=service.js.map