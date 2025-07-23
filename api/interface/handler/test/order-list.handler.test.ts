// @jest-environment node
import { handler as orderListHandler } from "../order-list.handler";

describe("order-list handler", () => {
  it("should call service.findAll and send response", async () => {
    const findAllMock = jest.fn().mockResolvedValue([{}]);
    const service = { findAll: () => findAllMock } as any;
    const req = { query: { id: "1" } } as any;
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() } as any;
    const next = jest.fn();
    await orderListHandler(service)(req, res);
    expect(findAllMock).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith([{}]);
  });
}); 