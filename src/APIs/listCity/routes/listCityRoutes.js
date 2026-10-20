const express = require("express");

const {
  listCity,
} = require("../controllers/listCityController");

const router = express.Router();

router.get("/city", listCity);

module.exports = router;