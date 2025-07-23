import { ProductModel } from "./products";

export type OrderProduct = {
  product: ProductModel;
  quantity: number;
};

export type OrderModel = {
  id: number;
  client: string;
  total: number;
  date: string;
  products: Array<OrderProduct>;
};
