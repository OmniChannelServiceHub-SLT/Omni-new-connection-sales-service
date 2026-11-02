const express = require("express");
const { createSalesLead } = require("../controllers/createSalesLeadController");

const router = express.Router();

router.post("/salesLead", createSalesLead);

module.exports = router;