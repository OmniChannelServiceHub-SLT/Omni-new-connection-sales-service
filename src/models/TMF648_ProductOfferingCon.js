const mongoose = require("mongoose");

const productOfferingConSchema = new mongoose.Schema(
  {
    BB_TYPE: {
      type: String,
      required: true,
    },
    INITIAL_FEE: {
      type: Number,
      required: true,
    },
    DESCRIPTION: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "TMF648_ProductOfferingCon",
  productOfferingConSchema
);