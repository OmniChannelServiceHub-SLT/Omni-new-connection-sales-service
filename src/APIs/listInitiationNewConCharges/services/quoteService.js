const Quote = require("../../../models/TMF648_Quote");

const listQuotes = async (filters = {}) => {
  const query = {};

  if (filters.state) query.state = filters.state;
  if (filters.category) query.category = filters.category;
  if (filters.externalId) query.externalId = filters.externalId;

  return Quote.find(query)
    .sort({ quoteDate: -1 })
    .lean();
};

const createQuote = async (data) => {
  return Quote.create({
    id: data.id || `Q${Date.now()}`,
    category: data.category,
    description: data.description,
    externalId: data.externalId,
    instantSyncQuote: data.instantSyncQuote ?? false,
    quoteDate: new Date(),
    state: "inProgress",
    version: "1",
    quoteItem: data.quoteItem
  });
};

const getQuoteById = async (id) => {
  return Quote.findOne({ id }).lean();
};

module.exports = {
  listQuotes,
  createQuote,
  getQuoteById
};