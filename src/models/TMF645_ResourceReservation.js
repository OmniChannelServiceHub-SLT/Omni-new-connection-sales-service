const mongoose = require("mongoose");

const resourceReservationSchema = new mongoose.Schema(
  {
    service_type: {
      type: String,
      required: true,
    },

    mobileno: {
      type: String,
      required: true,
    },

    nic: {
      type: String,
      required: true,
    },

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

    facilityreserved: String,
    noreserved: String,
    result: String,

    isSuccess: Boolean,
    errorMessege: {
      type: String,
      default: null,
    },
    exceptionDetail: {
      type: String,
      default: null,
    },
    errorShow: {
      type: String,
      default: null,
    },
    errorCode: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "TMF645_ResourceReservation",
  resourceReservationSchema
);