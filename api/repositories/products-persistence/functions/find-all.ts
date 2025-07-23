import { ProductModel } from "../../../domain/products";
import { Service } from "../entities";

export function findAll(this: Service) {
  return async (): Promise<Array<ProductModel | undefined>> => {
    await this.d.sqlClient.sync();

    const trxResult = await this.d.productTrxModel.findAll();

    return trxResult.map((address) => address.get({ plain: true }));
  };
}
