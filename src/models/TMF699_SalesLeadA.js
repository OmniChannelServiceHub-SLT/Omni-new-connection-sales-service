const mongoose = require("mongoose");

const salesLeadASchema = new mongoose.Schema(
  {
    servicetype: {
      type: String,
      required: true,
    },
    leadId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "TMF699_SalesLeadA",
  salesLeadASchema
);