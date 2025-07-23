// @jest-environment node
import { findAll } from "../find-all";

describe("products-persistence findAll", () => {
  it("should return products as plain objects", async () => {
    const productMock = { get: () => ({ id: 1, name: "Bread", price: 10, description: "Fresh bread" }) };
    const service = {
      d: {
        productTrxModel: { findAll: jest.fn().mockResolvedValue([productMock]) },
      },
    } as any;
    const result = await findAll.call(service)();
    expect(result[0]).toBeDefined();
    expect(result[0] && result[0].id).toBe(1);
    expect(result[0] && result[0].name).toBe("Bread");
  });
}); 