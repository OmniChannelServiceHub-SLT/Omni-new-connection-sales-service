const express = require("express");

const {
  createCheckService,
} = require("../controllers/createCheckServiceController");

const router = express.Router();

router.get("/checkService", createCheckService);

module.exports = router;