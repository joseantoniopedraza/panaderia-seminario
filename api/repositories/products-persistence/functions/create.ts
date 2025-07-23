import { ProductModel } from "../../../domain/products";
import { Service } from "../entities";

export function create(this: Service) {
  return async (product: ProductModel): Promise<ProductModel | undefined> => {
    
    await this.d.sqlClient.sync();
    const productTrx: ProductModel = {
      name: product.name,
      description: product.description,
      price: product.price,
    } as ProductModel;

    const trxResult = await this.d.productTrxModel.create(productTrx);

    productTrx.id = trxResult.dataValues.id;

    return productTrx;
  };
}
