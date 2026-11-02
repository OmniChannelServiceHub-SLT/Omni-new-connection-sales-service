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
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    facilityreserved: String,
    noreserved: String,
    result: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "TMF645_ResourceReservation",
  resourceReservationSchema
);