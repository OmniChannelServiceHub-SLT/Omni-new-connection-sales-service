const mongoose=require("mongoose");
const schema=new mongoose.Schema({agentCode:{type:String,required:true,unique:true},name:{type:String,required:true},channel:{type:String,default:"Sales"},status:{type:String,default:"active"},relatedParty:{type:[mongoose.Schema.Types.Mixed],default:[]}},{timestamps:true});
module.exports=mongoose.model("TMF699_Agent",schema);
