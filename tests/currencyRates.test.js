const {
  getCurrency,
  getPairs,
  getRate,
  getLatestPrice,
} = require("../helpers/apiHelper");
const { dataComparison } = require("../fixtures/dataComparison");
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

  it("returns rate for a rate id", async () => {
    const rate_id = "PINDUF8";
    const response = await getRate(rate_id);
    expect(response.status).toBe(200);
    expect(response.data.rate_id).toEqual(rate_id);
    expect(response.data.ticker).toHaveProperty("ask");
    expect(response.data.ticker).toHaveProperty("bid");
  });

  it("returns latest price for a ticker", async () => {
    const ticker = "BTCLTC";
    const response = await getLatestPrice(ticker);
    expect(response.status).toBe(200);

    expect(response.data[0]).toHaveProperty("created_on");
    expect(dataComparison(response.data[0].created_on)).toBe(true);
    expect(response.data[0].ticker).toHaveProperty("ask");
    expect(response.data[0].ticker).toHaveProperty("bid");
  });
});
