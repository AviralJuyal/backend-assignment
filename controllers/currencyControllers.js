const { default: axios } = require("axios");
const Currency = require("../models/currencyModel");

exports.createCurrency = async (req, res) => {
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
    await Currency.deleteMany({}); // Clear existing data

    await Currency.insertMany(currencyData); // Insert new data

    res.status(201).json({
      success: true,
      data: {
        currencyData,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      message: "Some error occured",
    });
  }
};
