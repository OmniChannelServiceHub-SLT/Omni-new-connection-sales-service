const mongoose=require("mongoose");
const schema=new mongoose.Schema({
  type:{type:String,default:"CheckServiceQualification"},
  state:{type:String,default:"done"},
  description:String,
  externalId:String,
  serviceQualificationItem:{type:[mongoose.Schema.Types.Mixed],default:[]},
  relatedParty:{type:[mongoose.Schema.Types.Mixed],default:[]},
  place:{type:[mongoose.Schema.Types.Mixed],default:[]}
},{timestamps:true});
module.exports=mongoose.model("TMF645_ServiceQualification",schema);
