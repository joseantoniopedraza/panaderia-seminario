"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
function create() {
    return async (product) => {
        await this.d.sqlClient.sync();
        const productTrx = {
            name: product.name,
            description: product.description,
            price: product.price,
        };
        const trxResult = await this.d.productTrxModel.create(productTrx);
        productTrx.id = trxResult.dataValues.id;
        return productTrx;
    };
}
//# sourceMappingURL=create.js.map