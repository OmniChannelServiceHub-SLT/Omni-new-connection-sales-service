const mongoose = require("mongoose");

const quoteItemSchema = new mongoose.Schema(
  {
    id: String,
    action: String,
    quantity: Number,
    productOffering: {
      id: String,
      href: String,
      name: String,
      "@referredType": String
    }
  },
  { _id: false }
);

const quoteSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    category: String,
    description: String,
    externalId: String,
    instantSyncQuote: {
      type: Boolean,
      default: false
    },
    quoteDate: Date,
    state: String,
    version: String,
    quoteItem: {
      type: [quoteItemSchema],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("TMF648_Quote", quoteSchema);