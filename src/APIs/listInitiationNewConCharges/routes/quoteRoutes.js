const express = require("express");

const {
  getQuotes,
  createQuoteHandler,
  getQuote
} = require("../controllers/quoteController");

const router = express.Router();

router.get("/", getQuotes);
router.post("/", createQuoteHandler);
router.get("/:id", getQuote);

module.exports = router;