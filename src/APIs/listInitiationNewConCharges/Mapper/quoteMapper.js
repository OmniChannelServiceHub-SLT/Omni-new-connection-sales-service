const mapQuote = (quote) => ({
  id: quote.id,
  href: `http://localhost:3007/tmf-api/quoteManagement/v4/quote/${quote.id}`,
  category: quote.category,
  description: quote.description,
  externalId: quote.externalId,
  instantSyncQuote: quote.instantSyncQuote,
  quoteDate: quote.quoteDate,
  state: quote.state,
  version: quote.version,
  quoteItem: quote.quoteItem,
  "@type": "Quote"
});

module.exports = {
  mapQuote
};