const CheckService = require("../../../models/TMF645_CheckService");

const createCheckServiceService = async ({
  rtom,
  eqtype,
  longitude,
  latitude,
}) => {
  const result = {
    dpexist: "Y",
    dplist: [
      {
        rtom: "R-WT",
        location: "WT-KWR-00016",
        eQ_NAME: "WT-KWR-0574-024",
        type: "FDP",
        locN_X: "7.000790654490399",
        locN_Y: "79.88358400762081",
        distance: "55.206",
        occupide: "8",
        free: "0",
        eQ_INDEX: "001",
        lea: "WT",
        status: "INSERVICE",
      },
      {
        rtom: "R-WT",
        location: "WT-MTG-00117",
        eQ_NAME: "WT-MTG-0571-001",
        type: "FDP",
        locN_X: "7.001943390743097",
        locN_Y: "79.88287657499313",
        distance: "99.349",
        occupide: "2",
        free: "6",
        eQ_INDEX: "001",
        lea: "WT",
        status: "INSERVICE",
      },
      {
        rtom: "R-WT",
        location: "WT-MTG-00120",
        eQ_NAME: "WT-MTG-0571-008",
        type: "FDP",
        locN_X: "6.99980463678109",
        locN_Y: "79.88271296024323",
        distance: "183.801",
        occupide: "7",
        free: "1",
        eQ_INDEX: "001",
        lea: "WT",
        status: "INSERVICE",
      },
    ],
  };

  await CheckService.create({
    rtom,
    eqtype,
    longitude,
    latitude,
    dpexist: result.dpexist,
    dplist: result.dplist,
  });

  return result;
};

module.exports = {
  createCheckServiceService,
};