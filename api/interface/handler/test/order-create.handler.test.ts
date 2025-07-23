// @jest-environment node
import { OrderModel } from "../../../domain/orders";
import { Service } from "../../../app/order-create";
import { default as defaultExport, handler as orderCreateHandler } from "../order-create.handler";

describe("order-create handler", () => {
  it("should call service.create and send response", async () => {
    const mockOrder: OrderModel = { client: "Test", total: 10, products: [], id: 1, date: "" };
    const createMock = jest.fn().mockResolvedValue(mockOrder);
    const service = { create: () => createMock } as unknown as Service;
    const req = { body: mockOrder } as any;
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() } as any;
    const next = jest.fn();
    await orderCreateHandler(service)(req, res);
    expect(createMock).toHaveBeenCalledWith({ client: "Test", total: 10, products: [] });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(mockOrder);
  });
}); 