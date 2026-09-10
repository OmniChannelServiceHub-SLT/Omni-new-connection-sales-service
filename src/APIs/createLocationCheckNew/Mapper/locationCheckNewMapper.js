const mapLocationCheckNewToTmf = (data) => {
  return {
    id: data.id,
    href: data.href,
    state: data.state,
    serviceQualificationItem: data.serviceQualificationItem,
    relatedParty: data.relatedParty,
    place: data.place
  };
};

module.exports = {
  mapLocationCheckNewToTmf
};