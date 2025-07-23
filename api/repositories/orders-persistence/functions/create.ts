import { OrderModel } from "../../../domain/orders";
import { Service } from "../entities";

export function create(this: Service) {
  return async (order: OrderModel): Promise<OrderModel | undefined> => {
    const orderTrx: OrderModel = {
      client: order.client,
      total: order.total,
      date: new Date().toDateString(),
    } as OrderModel;

    const trxResult = await this.d.orderTrxModel.create(orderTrx);
    for (const product of order.products) {
      await this.d.orderProductTrxModel.create({
        orderId: trxResult.dataValues.id,
        productId: product.product.id,
        quantity: product.quantity,
      });
    }
    orderTrx.id = trxResult.dataValues.id;

    return orderTrx;
  };
}
