const {
  createResourceService,
} = require("../services/createResourceService");

const createResource = async (req, res) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        code: "401",
        reason: "Authorization header is required",
      });
    }

    const result = await createResourceService(
      req.body,
      authorization
    );

    res.status(201).json(result);
  } catch (error) {
    res.status(error.statusCode || 500).json({
      code: String(error.statusCode || 500),
      reason: error.message,
    });
  }
};

module.exports = {
  createResource,
};