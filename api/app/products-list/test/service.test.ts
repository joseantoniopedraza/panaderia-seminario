// @jest-environment node
import { newService } from "../service";
import { ProductModel } from "../../../domain/products";

describe("products-list service", () => {
  it("should call productsPersistence.findAll and return the products", async () => {
    const mockProducts: ProductModel[] = [
      {
        id: 1,
        name: "Bread",
        price: 10,
        description: "Fresh bread",
      },
    ];
    const findAllMock = jest.fn().mockResolvedValue(mockProducts);
    const productsPersistence = { findAll: () => findAllMock } as any;
    const service = newService({ productsPersistence });
    const result = await service.findAll.call(service)();
    expect(findAllMock).toHaveBeenCalled();
    expect(result).toEqual(mockProducts);
  });
}); 