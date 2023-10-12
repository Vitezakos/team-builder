import { add } from "./add";

describe("add", () => {
  it("should return the sum of 2 numbers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});
