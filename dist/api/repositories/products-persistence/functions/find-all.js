"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
function findAll() {
    return async () => {
        await this.d.sqlClient.sync();
        const trxResult = await this.d.productTrxModel.findAll();
        return trxResult.map((address) => address.get({ plain: true }));
    };
}
//# sourceMappingURL=find-all.js.map