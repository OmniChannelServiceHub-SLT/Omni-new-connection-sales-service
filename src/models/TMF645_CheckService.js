const mongoose = require("mongoose");

const dpSchema = new mongoose.Schema(
  {
    rtom: String,
    location: String,
    eQ_NAME: String,
    type: String,
    locN_X: String,
    locN_Y: String,
    distance: String,
    occupide: String,
    free: String,
    eQ_INDEX: String,
    lea: String,
    status: String,
  },
  { _id: false }
);

const checkServiceSchema = new mongoose.Schema(
  {
    rtom: {
      type: String,
      required: true,
    },
    eqtype: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    dpexist: {
      type: String,
    },
    dplist: {
      type: [dpSchema],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "TMF645_CheckService",
  checkServiceSchema
);