const SalesLead = require("../../../models/TMF699_SalesLead");

const createSalesLeadService = async (data) => {
  const salesLead = await SalesLead.create(data);

  return salesLead;
};

module.exports = { createSalesLeadService };