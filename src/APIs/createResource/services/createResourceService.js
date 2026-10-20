const ResourceReservation = require("../../../models/TMF645_ResourceReservation");

const createResourceService = async (data) => {
  const {
    service_type,
    mobileno,
    nic,
    rtom,
    eqtype,
    longitude,
    latitude,
  } = data;

  if (
    !service_type ||
    !mobileno ||
    !nic ||
    !rtom ||
    !eqtype ||
    longitude === undefined ||
    latitude === undefined
  ) {
    const error = new Error(
      "service_type, mobileno, nic, rtom, eqtype, longitude and latitude are required"
    );

    error.statusCode = 400;
    throw error;
  }

  const savedData = await ResourceReservation.create({
    service_type,
    mobileno,
    nic,
    rtom,
    eqtype,
    longitude,
    latitude,
    isSuccess: true,
    facilityreserved: "Y",
    noreserved: "0112233746",
    result: "NF000505",
  });

  return {
    id: savedData._id.toString(),
    href: `/tmf-api/serviceQualification/v4/resource/${savedData._id}`,
    "@type": "Resource",
    service_type: savedData.service_type,
    mobileno: savedData.mobileno,
    nic: savedData.nic,
    rtom: savedData.rtom,
    eqtype: savedData.eqtype,
    longitude: savedData.longitude,
    latitude: savedData.latitude,
    facilityreserved: savedData.facilityreserved,
    noreserved: savedData.noreserved,
    result: savedData.result,
    isSuccess: savedData.isSuccess,
  };
};

module.exports = {
  createResourceService,
};