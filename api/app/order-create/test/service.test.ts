// @jest-environment node
import { newService } from "../service";
import { OrderModel } from "../../../domain/orders";

const mockOrder: OrderModel = {
  id: 1,
  client: "Test Client",
  total: 100,
  date: "2024-01-01",
  products: [
    {
      product: {
        id: 1,
        name: "Bread",
        price: 10,
        description: "Fresh bread",
      },
      quantity: 2,
    },
  ],
};

describe("order-create service", () => {
  it("should call ordersPersistence.create and return the created order", async () => {
    const createMock = jest.fn().mockResolvedValue(mockOrder);
    const ordersPersistence = { create: () => createMock } as any;
    const service = newService({ ordersPersistence });

    const result = await service.create.call(service)(mockOrder);
    expect(createMock).toHaveBeenCalledWith(mockOrder);
    expect(result).toEqual(mockOrder);
  });
}); 