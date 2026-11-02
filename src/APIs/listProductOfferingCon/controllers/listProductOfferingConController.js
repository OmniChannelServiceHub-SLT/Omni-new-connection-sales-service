const {
  listProductOfferingConService,
} = require("../services/listProductOfferingConService");

const listProductOfferingCon = async (req, res) => {
  try {
    const result = await listProductOfferingConService();

    return res.status(200).json({
      Results: result,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  listProductOfferingCon,
};