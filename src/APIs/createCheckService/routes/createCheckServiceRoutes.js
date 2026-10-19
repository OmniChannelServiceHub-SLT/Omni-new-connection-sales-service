const express = require("express");

const {
  createCheckService,
} = require("../controllers/createCheckServiceController");

const router = express.Router();

router.get("/checkServiceQualification", createCheckService);

module.exports = router;