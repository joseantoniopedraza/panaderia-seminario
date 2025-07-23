"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
function create() {
    return async (order) => {
        await this.d.sqlClient.sync();
        const orderTrx = {
            client: order.client,
            total: order.total,
            date: new Date().toDateString(),
        };
        const trxResult = await this.d.orderTrxModel.create(orderTrx);
        orderTrx.id = trxResult.dataValues.id;
        return orderTrx;
    };
}
//# sourceMappingURL=create.js.map