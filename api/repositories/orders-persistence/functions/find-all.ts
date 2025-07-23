import { OrderModel, OrderProduct } from "../../../domain/orders";
import { Service } from "../entities";

export function findAll(this: Service) {
  return async (id: number): Promise<Array<OrderModel | undefined>> => {
    const trxResult = await this.d.orderTrxModel.findAll({
      where: id ? { id: id } : {},
    });

    const orders: Array<OrderModel> = [];

    for (const order of trxResult) {
      const _orderProducts: Array<OrderProduct> = [];

      const orderProducts = await this.d.orderProductTrxModel.findAll({
        where: { orderId: order.get({ plain: true }).id },
      });

      for (const orderProduct of orderProducts) {
        console.log(orderProduct.get({ plain: true }));
        const product = await this.d.productTrxModel.findOne({
          where: { id: orderProduct.get({ plain: true }).productId },
        });
        _orderProducts.push({
          quantity: orderProduct.get({ plain: true }).quantity,
          product: {
            id: product?.get().id,
            description: product?.get().description,
            name: product?.get().name,
            price: product?.get().price,
          },
        });
      }
      orders.push({
        id: order.get({ plain: true }).id,
        total: order.get({ plain: true }).total,
        client: order.get({ plain: true }).client,
        date: order.get({ plain: true }).date,
        products: _orderProducts,
      });
    }
    return orders;
  };
}
