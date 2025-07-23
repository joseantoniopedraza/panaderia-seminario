// @jest-environment node
import { newService } from "../service";
import { ProductModel } from "../../../domain/products";

describe("product-create service", () => {
  it("should call productsPersistence.create and return the created product", async () => {
    const mockProduct: ProductModel = {
      id: 1,
      name: "Bread",
      price: 10,
      description: "Fresh bread",
    };
    const createMock = jest.fn().mockResolvedValue(mockProduct);
    const productsPersistence = { create: () => createMock } as any;
    const service = newService({ productsPersistence });
    const result = await service.create.call(service)(mockProduct);
    expect(createMock).toHaveBeenCalledWith(mockProduct);
    expect(result).toEqual(mockProduct);
  });
}); 