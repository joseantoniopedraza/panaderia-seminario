// @jest-environment node
import { ProductModel } from "../../../domain/products";
import { Service } from "../../../app/product-create";
import { default as defaultExport, handler as productCreateHandler } from "../product-create.handler";

describe("product-create handler", () => {
  it("should call service.create and send response", async () => {
    const mockProduct: ProductModel = { name: "Bread", price: 10, description: "desc", id: 1 };
    const createMock = jest.fn().mockResolvedValue(mockProduct);
    const service = { create: () => createMock } as unknown as Service;
    const req = { body: mockProduct } as any;
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() } as any;
    const next = jest.fn();
    await productCreateHandler(service)(req, res);
    expect(createMock).toHaveBeenCalledWith({ name: "Bread", price: 10, description: "desc" });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(mockProduct);
  });
}); 