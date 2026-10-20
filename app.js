const express = require("express");
const cors = require("cors");

const createSalesLeadRoutes = require("./src/APIs/createSalesLead/routes/createSalesLeadRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tmf-api/salesManagement/v4", createSalesLeadRoutes);

module.exports = app;