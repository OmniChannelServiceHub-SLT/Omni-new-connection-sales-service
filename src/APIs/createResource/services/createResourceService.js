const ResourceReservation = require("../../../models/TMF645_ResourceReservation");

const createResourceService = async (data) => {
  const result = {
    facilityreserved: "Y",
    noreserved: "0112233746",
    result: "NF000505",
  };

  await ResourceReservation.create({
    ...data,
    ...result,
  });

  return result;
};

module.exports = {
  createResourceService,
};