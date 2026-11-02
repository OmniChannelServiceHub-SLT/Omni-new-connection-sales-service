const express = require("express");

const {
  createSalesLeadA,
} = require("../controllers/createSalesLeadAController");

const router = express.Router();

router.post("/salesLeadA", createSalesLeadA);

module.exports = router;