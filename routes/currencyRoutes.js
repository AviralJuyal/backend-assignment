const express = require("express");
const { createCurrency } = require("../controllers/currencyControllers");
const router = express.Router();

router.route("/").post(createCurrency);

module.exports = router;
