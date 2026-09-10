const { createLocationCheckNew } = require("../services/locationCheckNewService");
const { mapLocationCheckNewToTmf } = require("../Mapper/locationCheckNewMapper");

const createLocationCheckNewHandler = async (req, res) => {
  try {
    const dataBundle = await createLocationCheckNew(req.body);

    // Legacy response
    if (req.headers["x-response-format"] === "legacy") {
      return res.status(201).json({
        isSuccess: true,
        errorMessege: null,
        exceptionDetail: null,
        dataBundle,
        errorShow: null,
        errorCode: null
      });
    }

    // TMF response
    const tmfResponse = mapLocationCheckNewToTmf(dataBundle);

    return res.status(201).json(tmfResponse);

  } catch (error) {
    return res.status(error.status || error.statusCode || 500).json({
      isSuccess: false,
      errorMessege: error.message,
      exceptionDetail: error.stack,
      dataBundle: null,
      errorShow: true,
      errorCode: error.status || error.statusCode || 500
    });
  }
};

module.exports = {
  createLocationCheckNewHandler
};