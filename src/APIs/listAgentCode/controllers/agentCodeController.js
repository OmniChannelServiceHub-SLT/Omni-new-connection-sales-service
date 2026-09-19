const { listAgentCode } = require("../services/agentCodeService");
const { mapAgentCodeResponse } = require("../Mapper/agentCodeMapper");

const listAgentCodeHandler = async (req, res) => {
  try {
    const agents = await listAgentCode();

    const data = mapAgentCodeResponse(agents);

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
    console.error("listAgentCode error:", error);

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
  listAgentCodeHandler,
};