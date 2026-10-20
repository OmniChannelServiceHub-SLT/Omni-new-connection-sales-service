const City = require("../../../models/TMF645_City");

const listCityService = async () => {
  const cities = [
    {
      rtom: "R-AD",
      city: "Horowpathana",
      latitude: "8.311350",
      longitude: "80.403650",
      status: "ACTIVE",
      district: "Anuradhapura",
    },
    {
      rtom: "R-AD",
      city: "Galnewa",
      latitude: "8.311350",
      longitude: "80.403650",
      status: "ACTIVE",
      district: "Anuradhapura",
    },
    {
      rtom: "R-AD",
      city: "Eppawala",
      latitude: "8.311350",
      longitude: "80.403650",
      status: "ACTIVE",
      district: "Anuradhapura",
    },
  ];

  await City.deleteMany({});
  await City.insertMany(cities);

  return cities;
};

module.exports = {
  listCityService,
};