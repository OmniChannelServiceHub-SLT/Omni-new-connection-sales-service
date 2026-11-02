const express = require("express");

const {
  listProductOfferingCon,
} = require("../controllers/listProductOfferingConController");

const router = express.Router();

router.get("/productOfferingCon", listProductOfferingCon);

module.exports = router;