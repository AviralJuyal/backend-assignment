const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Currency = mongoose.model("Currency", currencySchema);

module.exports = Currency;
