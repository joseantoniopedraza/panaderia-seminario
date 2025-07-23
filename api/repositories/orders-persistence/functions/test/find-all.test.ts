// @jest-environment node
import { findAll } from "../find-all";

describe("orders-persistence findAll", () => {
  it("should return orders with products", async () => {
    const orderMock = {
      get: () => ({ id: 1, total: 100, client: "Test Client", date: "2024-01-01" })
    };
    const orderProductMock = {
      get: () => ({ productId: 1, quantity: 2 })
    };
    const productMock = {
      get: () => ({ id: 1, name: "Bread", price: 10, description: "Fresh bread" })
    };
    const service = {
      d: {
        orderTrxModel: { findAll: jest.fn().mockResolvedValue([orderMock]) },
        orderProductTrxModel: { findAll: jest.fn().mockResolvedValue([orderProductMock]) },
        productTrxModel: { findOne: jest.fn().mockResolvedValue(productMock) },
      },
    } as any;
    const result = await findAll.call(service)(1);
    expect(result[0]).toBeDefined();
    expect(result[0] && result[0].id).toBe(1);
    expect(result[0] && result[0].products[0]).toBeDefined();
    expect(result[0] && result[0].products[0] && result[0].products[0].product.id).toBe(1);
  });
}); 