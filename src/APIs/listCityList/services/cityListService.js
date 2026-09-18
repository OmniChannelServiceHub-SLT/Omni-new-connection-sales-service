const City = require("../../../models/City");

const defaultCities = [
  {
    code: "CMB",
    name: "Colombo",
    district: "Colombo",
    province: "Western",
  },
  {
    code: "KDY",
    name: "Kandy",
    district: "Kandy",
    province: "Central",
  },
  {
    code: "GLE",
    name: "Galle",
    district: "Galle",
    province: "Southern",
  },
];

const listCityList = async () => {
  const cityCount = await City.countDocuments();

  if (cityCount === 0) {
    await City.insertMany(defaultCities);
  }

  return City.find(
    { active: true },
    {
      _id: 0,
      code: 1,
      name: 1,
      district: 1,
      province: 1,
    }
  )
    .sort({ name: 1 })
    .lean();
};

module.exports = {
  listCityList,
};
