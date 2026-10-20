const SalesLeadA = require("../../../models/TMF699_SalesLeadA");

const createSalesLeadAService = async ({ servicetype }) => {
  const leadId = "1-17ZFG6Q";

  await SalesLeadA.create({
    servicetype,
    leadId,
  });

  return leadId;
};

module.exports = {
  createSalesLeadAService,
};