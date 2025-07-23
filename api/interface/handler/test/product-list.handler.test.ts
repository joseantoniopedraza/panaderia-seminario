// @jest-environment node
import { handler as productListHandler } from "../product-list.handler";

describe("product-list handler", () => {
  it("should call service.findAll and send response", async () => {
    const findAllMock = jest.fn().mockResolvedValue([{}]);
    const service = { findAll: () => findAllMock } as any;
    const req = {} as any;
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() } as any;
    const next = jest.fn();
    await productListHandler(service)(req, res);
    expect(findAllMock).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith([{}]);
  });
}); 