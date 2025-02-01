// apiHelper.js
const axios = require("axios");

const mock =
  "https://private-anon-7a1116acd0-nexchange2.apiary-mock.com/en/api/v1";

async function createUser(userData) {
  const apiUrl = "https://api.n.exchange/en/api/v1/users/";
  return axios.post(apiUrl, userData);
}

async function getCurrency() {
  return axios.get(`${mock}/currency/`);
}

async function getPairs() {
  return axios.get(`${mock}/pair/`);
}

module.exports = {
  createUser,
  getCurrency,
  getPairs
};
