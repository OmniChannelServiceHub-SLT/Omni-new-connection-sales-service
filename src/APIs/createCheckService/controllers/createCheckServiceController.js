const {
  createCheckServiceService,
} = require("../services/createCheckServiceService");

const createCheckService = async (req, res) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        code: "401",
        reason: "Authorization header is required",
      });
    }

    const result = await createCheckServiceService(
      req.query,
      authorization
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(error.statusCode || 500).json({
      code: String(error.statusCode || 500),
      reason: error.message,
    });
  }
};

module.exports = {
  createCheckService,
};