const express=require("express");
const locationCheckNewRoutes=require("./APIs/createLocationCheckNew/routes/locationCheckNewRoutes");
const cityListRoutes=require("./APIs/listCityList/routes/cityListRoutes");
const app=express();
app.use(express.json());
app.get("/health",(req,res)=>res.status(200).json({status:"UP",service:"new-connection-sales-service"}));
// Menaka initial APIs: TMF645
app.use("/tmf-api/serviceQualification/v4/checkServiceQualification",locationCheckNewRoutes);
app.use("/tmf-api/serviceQualification/v4/city",cityListRoutes);
module.exports=app;
