const express = require("express");
const cors = require("cors");

const createSalesLeadRoutes = require("./src/APIs/createSalesLead/routes/createSalesLeadRoutes");
const createCheckServiceRoutes = require("./src/APIs/createCheckService/routes/createCheckServiceRoutes");
const createResourceRoutes = require("./src/APIs/createResource/routes/createResourceRoutes");
const listCityRoutes = require("./src/APIs/listCity/routes/listCityRoutes");
const listProductOfferingConRoutes = require("./src/APIs/listProductOfferingCon/routes/listProductOfferingConRoutes");
const createSalesLeadARoutes = require("./src/APIs/createSalesLeadA/routes/createSalesLeadARoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tmf-api/salesManagement/v4", createSalesLeadRoutes);
app.use("/tmf-api/serviceQualification/v4", createCheckServiceRoutes);
app.use("/tmf-api/resourceActivation/v4", createResourceRoutes);
app.use("/tmf-api/serviceQualification/v4", listCityRoutes);
app.use("/tmf-api/productOffering/v4",listProductOfferingConRoutes);
app.use("/tmf-api/salesManagement/v4",createSalesLeadARoutes);

module.exports = app;