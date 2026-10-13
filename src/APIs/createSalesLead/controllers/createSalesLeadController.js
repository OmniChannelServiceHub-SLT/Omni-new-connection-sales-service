const { createSalesLeadService } = require("../services/createSalesLeadService");

const createSalesLead = async (req, res) => {
  try {
    const salesLead = await createSalesLeadService(req.body);

    res.status(201).json({
      id: salesLead._id.toString(),
      href: `/tmf-api/salesManagement/v4/salesLead/${salesLead._id}`,
      "@type": "SalesLead",
      telephoneNo: salesLead.telephoneNo,
      firstName: salesLead.firstName,
      lastName: salesLead.lastName,
      nic: salesLead.nic,
      description: salesLead.description,
      conatctTelNo: salesLead.conatctTelNo,
      leadId: salesLead.leadId
    });
  } catch (error) {
    res.status(400).json({
      code: "400",
      reason: error.message
    });
  }
};

module.exports = {
  createSalesLead
};