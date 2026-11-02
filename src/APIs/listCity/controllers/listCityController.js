const {
  listCityService,
} = require("../services/listCityService");

const listCity = async (req, res) => {
  try {
    const result = await listCityService();

    return res.status(200).json({
      isSuccess: true,
      errorMessege: null,
      profileStatus: null,
      exceptionDetail: null,
      dataBundle: result,
      errorShow: null,
    });
  } catch (error) {
    return res.status(500).json({
      isSuccess: false,
      errorMessege: error.message,
      profileStatus: null,
      exceptionDetail: null,
      dataBundle: null,
      errorShow: null,
    });
  }
};

module.exports = {
  listCity,
};