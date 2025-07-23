// @jest-environment node
import { newService } from "../service";
import { OrderModel } from "../../../domain/orders";

describe("order-list service", () => {
  it("should call ordersPersistence.findAll and return the orders", async () => {
    const mockOrders: OrderModel[] = [
      {
        id: 1,
        client: "Test Client",
        total: 100,
        date: "2024-01-01",
        products: [],
      },
    ];
    const findAllMock = jest.fn().mockResolvedValue(mockOrders);
    const ordersPersistence = { findAll: () => findAllMock } as any;
    const service = newService({ ordersPersistence });
    const result = await service.findAll.call(service)(123);
    expect(findAllMock).toHaveBeenCalledWith(123);
    expect(result).toEqual(mockOrders);
  });
}); 