const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    rtom: {
      type: String,
    },
    city: {
      type: String,
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    status: {
      type: String,
    },
    district: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TMF645_City", citySchema);