const mapCityListResponse = (cities) => {
  return cities.map((city) => ({
    code: city.code,
    name: city.name,
    district: city.district,
    province: city.province,
  }));
};

module.exports = {
  mapCityListResponse,
};