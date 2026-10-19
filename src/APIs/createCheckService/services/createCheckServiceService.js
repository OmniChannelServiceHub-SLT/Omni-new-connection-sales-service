const axios = require("axios");
const CheckServiceQualification = require("../../../models/TMF645_CheckServiceQualification");

const createCheckServiceService = async (params, authorization) => {
  const { rtom, eqtype, longitude, latitude } = params;

  if (!rtom || !eqtype || longitude === undefined || latitude === undefined) {
    const error = new Error(
      "rtom, eqtype, longitude and latitude are required"
    );
    error.statusCode = 400;
    throw error;
  }

  const response = await axios.get(
    "https://omnitest.slt.com.lk/api/NewCon/GetFeasibilityCheck",
    {
      params: {
        rtom,
        eqtype,
        longitude,
        latitude,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    }
  );

  const result = response.data;

  const savedData = await CheckServiceQualification.create({
    rtom,
    eqtype,
    longitude,
    latitude,
    dpexist: result.dpexist,
    dplist: result.dplist || [],
  });

  return {
    id: savedData._id.toString(),
    href: `/tmf-api/serviceQualification/v4/checkServiceQualification/${savedData._id}`,
    "@type": "CheckServiceQualification",
    rtom: savedData.rtom,
    eqtype: savedData.eqtype,
    longitude: savedData.longitude,
    latitude: savedData.latitude,
    dpexist: savedData.dpexist,
    dplist: savedData.dplist,
  };
};

module.exports = {
  createCheckServiceService,
};