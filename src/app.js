const express=require("express");
const locationCheckNewRoutes=require("./APIs/createLocationCheckNew/routes/locationCheckNewRoutes");
const cityListRoutes=require("./APIs/listCityList/routes/cityListRoutes");
const agentCodeRoutes=require("./APIs/listAgentCode/routes/agentCodeRoutes");
const app=express();
app.use(express.json());
app.get("/health",(req,res)=>res.status(200).json({status:"UP",service:"new-connection-sales-service"}));
// Menaka initial APIs: TMF645 + TMF699
app.use("/tmf-api/serviceQualification/v4/checkServiceQualification",locationCheckNewRoutes);
app.use("/tmf-api/serviceQualification/v4/city",cityListRoutes);
app.use("/tmf-api/leadManagement/v4/agent",agentCodeRoutes);
module.exports=app;
