const { listCityList } = require("../services/cityListService");

const { mapCityListResponse } = require("../Mapper/cityListMapper");

const listCityListHandler = async (req, res) => {
  try {
    const cities = await listCityList();

    const data = mapCityListResponse(cities);

    const isLegacy =
      req.headers["x-response-format"] === "legacy";

    if (isLegacy) {
      return res.status(200).json({
        isSuccess: true,
        errorMessege: null,
        exceptionDetail: null,
        dataBundle: data,
        errorShow: null,
        errorCode: null,
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("listCityList error:", error);

    return res.status(500).json({
      isSuccess: false,
      errorMessege: "Internal Server Error",
      exceptionDetail: error.message,
      dataBundle: null,
      errorShow: true,
      errorCode: 500,
    });
  }
};

module.exports = {
  listCityListHandler,
};