import { add } from "../src/calc";

import { divide } from "../src/calc";

//Testing add function
describe("test add function", () => {
    it("should return 15 for add(10,5)", () => {
      expect(add(10, 5)).toBe(15);
    });it("should return 5 for add(2,3)", () => {
      expect(add(2, 3)).toBe(5);
    });
  });
//testing divide function
  describe("test divide function", () => {
    it("should return 2 for divide(10,5)", () => {
      expect(divide(10, 5)).toBe(2);
    });it("should return 5 for add(25,5)", () => {
      expect(divide(25, 5)).toBe(5);
    });
  });