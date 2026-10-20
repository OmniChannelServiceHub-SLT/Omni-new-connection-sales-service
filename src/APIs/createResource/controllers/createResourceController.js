const {
  createResourceService,
} = require("../services/createResourceService");

const createResource = async (req, res) => {
  try {
    const {
      service_type,
      mobileno,
      nic,
      rtom,
      eqtype,
      longitude,
      latitude,
    } = req.body;

    if (
      !service_type ||
      !mobileno ||
      !nic ||
      !rtom ||
      !eqtype ||
      !longitude ||
      !latitude
    ) {
      return res.status(400).json({
        code: "400",
        reason:
          "service_type, mobileno, nic, rtom, eqtype, longitude and latitude are required",
      });
    }

    const result = await createResourceService({
      service_type,
      mobileno,
      nic,
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
  createResource,
};