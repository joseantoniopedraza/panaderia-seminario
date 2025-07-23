"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newService = newService;
exports.findAll = findAll;
function newService(d) {
    return {
        d,
        findAll,
    };
}
function findAll() {
    return async () => {
        const result = await this.d.productsPersistence.findAll()();
        return result;
    };
}
//# sourceMappingURL=service.js.map