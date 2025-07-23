import { OrderModel } from "../../../domain/orders";
import { Service } from "../entities";

export function create(this: Service) {
  return async (order: OrderModel): Promise<OrderModel | undefined> => {
    
    await this.d.sqlClient.sync();
    const orderTrx: OrderModel = {
      client: order.client,
      total: order.total,
      date: new Date().toDateString(),
    } as OrderModel;

    const trxResult = await this.d.orderTrxModel.create(orderTrx);

    orderTrx.id = trxResult.dataValues.id;

    return orderTrx;
  };
}
