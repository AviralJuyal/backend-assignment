const { default: axios } = require("axios");
const Currency = require("../../models/currencyModel");

exports.currencyFunctionUpdate = async (req, res) => {
  try {
    let currencyData = [];
    //this api gets the auth token from server
    await axios({
      method: "get",
      url: `https://api.coingecko.com/api/v3/coins/list`,
      responseType: "json",
    }).then(function (response) {
      currencyData = response.data;
    });

    // Clear existing data
    await Currency.deleteMany({});

    // Insert new data
    await Currency.insertMany(currencyData);
  } catch (err) {
    console.log(err);
  }
};
