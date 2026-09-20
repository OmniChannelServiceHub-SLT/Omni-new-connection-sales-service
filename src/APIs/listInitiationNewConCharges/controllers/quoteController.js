const {
  listQuotes,
  createQuote,
  getQuoteById
} = require("../services/quoteService");

const { mapQuote } = require("../Mapper/quoteMapper");

const getQuotes = async (req, res) => {
  try {
    const quotes = await listQuotes({
      state: req.query.state,
      category: req.query.category,
      externalId: req.query.externalId
    });

    const data = quotes.map(mapQuote);

    if (req.headers["x-response-format"] === "legacy") {
      return res.status(200).json({
        isSuccess: true,
        errorMessege: null,
        exceptionDetail: null,
        dataBundle: data,
        errorShow: null,
        errorCode: null
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("getQuotes error:", error);

    return res.status(500).json({
      code: "500",
      reason: "Internal Server Error",
      message: error.message,
      status: "500"
    });
  }
};

const createQuoteHandler = async (req, res) => {
  try {
    const quote = await createQuote(req.body);

    return res.status(201).json(
      mapQuote(quote.toObject())
    );
  } catch (error) {
    console.error("createQuote error:", error);

    return res.status(500).json({
      code: "500",
      reason: "Internal Server Error",
      message: error.message,
      status: "500"
    });
  }
};

const getQuote = async (req, res) => {
  try {
    const quote = await getQuoteById(req.params.id);

    if (!quote) {
      return res.status(404).json({
        code: "404",
        reason: "Not Found",
        message: "Quote not found",
        status: "404"
      });
    }

    return res.status(200).json(mapQuote(quote));
  } catch (error) {
    console.error("getQuote error:", error);

    return res.status(500).json({
      code: "500",
      reason: "Internal Server Error",
      message: error.message,
      status: "500"
    });
  }
};

module.exports = {
  getQuotes,
  createQuoteHandler,
  getQuote
};