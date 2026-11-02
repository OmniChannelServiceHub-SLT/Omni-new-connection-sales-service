const express = require("express");

const {
  createResource,
} = require("../controllers/createResourceController");

const router = express.Router();

router.post("/resource", createResource);

module.exports = router;
