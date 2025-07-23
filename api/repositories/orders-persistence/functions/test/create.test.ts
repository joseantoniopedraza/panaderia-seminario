// @jest-environment node
import { create } from "../create";
import { OrderModel } from "../../../../domain/orders";

describe("orders-persistence create", () => {
  it("should create an order and return it with an id", async () => {
    const mockOrder: OrderModel = {
      id: 0,
      client: "Test Client",
      total: 100,
      date: "2024-01-01",
      products: [
        {
          product: { id: 1, name: "Bread", price: 10, description: "Fresh bread" },
          quantity: 2,
        },
      ],
    };
    const createOrderTrxMock = jest.fn().mockResolvedValue({ dataValues: { id: 123 } });
    const createOrderProductTrxMock = jest.fn().mockResolvedValue({});
    const service = {
      d: {
        orderTrxModel: { create: createOrderTrxMock },
        orderProductTrxModel: { create: createOrderProductTrxMock },
      },
    } as any;
    const result = await create.call(service)(mockOrder);
    expect(result).toBeDefined();
    expect(result && result.id).toBe(123);
  });
}); 