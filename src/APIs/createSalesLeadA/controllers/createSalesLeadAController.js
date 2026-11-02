const {
  createSalesLeadAService,
} = require("../services/createSalesLeadAService");

const createSalesLeadA = async (req, res) => {
  try {
    const { servicetype } = req.body;

    if (!servicetype) {
      return res.status(400).json({
        code: "400",
        reason: "servicetype is required",
      });
    }

    const result = await createSalesLeadAService({
      servicetype,
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
  createSalesLeadA,
};