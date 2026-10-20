const {
  createCheckServiceService,
} = require("../services/createCheckServiceService");

const createCheckService = async (req, res) => {
  try {
    const {
      rtom,
      eqtype,
      longitude,
      latitude,
    } = req.query;

    if (!rtom || !eqtype || !longitude || !latitude) {
      return res.status(400).json({
        code: "400",
        reason: "rtom, eqtype, longitude and latitude are required",
      });
    }

    const result = await createCheckServiceService({
      rtom,
      eqtype,
      longitude,
      latitude,
    });

    return res.status(200).json({
      isSuccess: true,
      errorMessege: null,
      exceptionDetail: null,
      dataBundle: result,
      errorShow: null,
      errorCode: null,
    });
  } catch (error) {
    return res.status(500).json({
      isSuccess: false,
      errorMessege: error.message,
      exceptionDetail: null,
      dataBundle: null,
      errorShow: null,
      errorCode: "500",
    });
  }
};

module.exports = {
  createCheckService,
};