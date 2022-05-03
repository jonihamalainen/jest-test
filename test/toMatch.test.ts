import { matchString } from "../src/toMatch";

//Testing matchString 
describe("test matchString ", () => {
    it("should inculde tekstissa on asia", () => {
      expect(matchString.desci).toEqual("tekstissa on asia")
    });
});

describe("test matchString ", () => {
    it("should inculde tekstissa on asia", () => {
      expect(matchString.desci2).not.toEqual("tekstissa on asia")
    });
});
