const axios = require("axios");
const environment = require("../config/environment");

const mockendApi = axios.create({
  baseURL: environment.MOCKEND_URL,
});

module.exports = mockendApi;
