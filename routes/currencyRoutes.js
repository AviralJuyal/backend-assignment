const express = require("express");
const {
  createCurrency,
  convertCurrency,
} = require("../controllers/currencyControllers");
const router = express.Router();

// Route for creating currency data
router.route("/").post(createCurrency);

// Route for converting currency
router.route("/convert").post(convertCurrency);

module.exports = router;
