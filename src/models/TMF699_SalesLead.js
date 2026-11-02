const mongoose = require("mongoose");

const salesLeadSchema = new mongoose.Schema(
  {
    telephoneNo: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    nic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    conatctTelNo: {
      type: String,
    },
    leadId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TMF699_SalesLead", salesLeadSchema);