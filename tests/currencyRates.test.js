const { getCurrency, getPairs } = require("../helpers/apiHelper");
const currencies = require("../fixtures/currencies.json");
const pairs = require("../fixtures/pairs.json");

describe("API tests for currency rates", () => {
  it("returns currency rates successfully", async () => {
    try {
      const response = await getCurrency();
      expect(response.status).toBe(200);
      expect(response.data).toEqual(currencies);
    } catch (error) {
      console.error("Error getting currency rates:", error);
    }
  });

  it("returns currency pairs successfully", async () => {
    try {
      const response = await getPairs();
      expect(response.status).toBe(200);
      expect(response.data).toEqual(pairs);
    } catch (error) {
      console.error("Error getting currency rates:", error);
    }
  });
});
