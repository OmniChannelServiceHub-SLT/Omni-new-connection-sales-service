const ProductOfferingCon = require("../../../models/TMF648_ProductOfferingCon");

const listProductOfferingConService = async () => {
  const offerings = [
    {
      BB_TYPE: "ADSL",
      INITIAL_FEE: 1000,
      DESCRIPTION: "ADSL Initial Fee",
    },
    {
      BB_TYPE: "SLT 4G",
      INITIAL_FEE: 2000,
      DESCRIPTION: "LTE Initial Fee",
    },
    {
      BB_TYPE: "SLT Fiber",
      INITIAL_FEE: 3000,
      DESCRIPTION: "FTTH Initial Fee",
    },
  ];

  await ProductOfferingCon.deleteMany({});
  await ProductOfferingCon.insertMany(offerings);

  return offerings;
};

module.exports = {
  listProductOfferingConService,
};