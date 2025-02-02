// apiHelper.js
const axios = require("axios");

const mock =
  "https://private-anon-7a1116acd0-nexchange2.apiary-mock.com/en/api/v1";
const prod = "https://api.n.exchange/en/api/v1";

async function createUser(userData) {
  return axios.post(`${prod}/users/`, userData);
}

async function getCurrency() {
  return axios.get(`${mock}/currency/`);
}

async function getPairs() {
  return axios.get(`${mock}/pair/`);
}

async function getRate(rate_id) {
  return axios.get(`${mock}/rate/${rate_id}`);
}

async function getLatestPrice(ticker) {
  return axios.get(`${prod}/price/${ticker}/latest/`);
}

module.exports = {
  createUser,
  getCurrency,
  getPairs,
  getRate,
  getLatestPrice
};
