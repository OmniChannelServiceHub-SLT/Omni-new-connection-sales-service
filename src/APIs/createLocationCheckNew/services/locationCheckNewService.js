const Qualification=require("../../../models/TMF645_ServiceQualification");
const createLocationCheckNew=async(payload)=>{
  const {latitude,longitude,address,serviceType,customerId}=payload;
  if(latitude===undefined && longitude===undefined && !address){const e=new Error("Provide address or latitude/longitude");e.statusCode=400;throw e;}
  const item={id:"1",state:"done",qualificationResult:"qualified",service:{serviceType:serviceType||"New Connection"}};
  const q=await Qualification.create({description:"New connection location feasibility check",externalId:payload.externalId,serviceQualificationItem:[item],relatedParty:customerId?[{id:customerId,role:"Customer"}]:[],place:[{role:"serviceLocation",geographicLocation:{latitude,longitude},address}]});
  return {id:q._id.toString(),href:`/tmf-api/serviceQualification/v4/checkServiceQualification/${q._id}`,state:q.state,serviceQualificationItem:q.serviceQualificationItem,relatedParty:q.relatedParty,place:q.place};
};
module.exports={createLocationCheckNew};
