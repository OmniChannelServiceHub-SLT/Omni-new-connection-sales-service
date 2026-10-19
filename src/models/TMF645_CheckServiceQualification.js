const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema(
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

const checkServiceQualificationSchema = new mongoose.Schema(
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
      type: Number,
      required: true,
    },

    latitude: {
      type: Number,
      required: true,
    },

    dpexist: {
      type: String,
    },

    dplist: {
      type: [facilitySchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "TMF645_CheckServiceQualification",
  checkServiceQualificationSchema
);