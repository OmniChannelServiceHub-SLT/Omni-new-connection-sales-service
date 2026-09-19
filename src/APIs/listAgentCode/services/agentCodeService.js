const Agent=require("../../../models/TMF699_Agent");
const defaults=[{agentCode:"AG001",name:"Default Sales Agent",channel:"Retail"},{agentCode:"AG002",name:"Online Sales Agent",channel:"Digital"}];
const listAgentCode=async()=>{
  if(await Agent.countDocuments()===0) await Agent.insertMany(defaults);
  return Agent.find({status:"active"},{_id:0,agentCode:1,name:1,channel:1,status:1,relatedParty:1}).sort({agentCode:1}).lean();
};
module.exports={listAgentCode};
