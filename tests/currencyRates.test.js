const { getCurrency, getPairs, getRate } = require("../helpers/apiHelper");
const currencies = require("../fixtures/currencies.json");
const pairs = require("../fixtures/pairs.json");

describe("API tests for currency rates", () => {
  it("returns currency rates successfully", async () => {
    const response = await getCurrency();
    expect(response.status).toBe(200);
    expect(response.data).toEqual(currencies);
  });

  it("returns currency pairs successfully", async () => {
    const response = await getPairs();
    expect(response.status).toBe(200);
    expect(response.data).toEqual(pairs);
  });

  it("returns price for a currency rate", async () => {
    const rate_id = "PINDUF8";
    const response = await getRate(rate_id);
    expect(response.status).toBe(200);
    expect(response.data.rate_id).toEqual(rate_id);
    expect(response.data.ticker).toHaveProperty("ask");
    expect(response.data.ticker).toHaveProperty("bid");
  });
});
