// @jest-environment node
import { create } from "../create";
import { ProductModel } from "../../../../domain/products";

describe("products-persistence create", () => {
  it("should create a product and return it with an id", async () => {
    const mockProduct: ProductModel = {
      id: 0,
      name: "Bread",
      price: 10,
      description: "Fresh bread",
    };
    const createProductTrxMock = jest.fn().mockResolvedValue({ dataValues: { id: 123 } });
    const service = {
      d: {
        productTrxModel: { create: createProductTrxMock },
      },
    } as any;
    const result = await create.call(service)(mockProduct);
    expect(result).toBeDefined();
    expect(result && result.id).toBe(123);
  });
}); 