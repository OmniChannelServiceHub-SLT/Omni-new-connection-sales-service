const router = require("express").Router();

const {
  listCityListHandler,
} = require("../controllers/cityListController");

router.get("/", listCityListHandler);

module.exports = router;