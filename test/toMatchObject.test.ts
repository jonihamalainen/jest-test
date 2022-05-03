import { houseForSale, dreamHouse, dreamHouse2 } from "../src/toMatchObject";

//testing object matching
describe("test if 2 objects match ", () => {
    it("should have matching properties", () => {
      expect(houseForSale).toMatchObject(dreamHouse)
    });
});

describe("test if 2 objects match", () => {
    it("should not have matching properties and succeed", () => {
      expect(houseForSale).not.toMatchObject(dreamHouse2)
    });
});

