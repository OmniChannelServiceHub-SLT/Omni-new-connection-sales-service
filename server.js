require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const createSalesLeadRoutes = require("./src/APIs/createSalesLead/routes/createSalesLeadRoutes");

const app = express();

app.use(express.json());

app.use("/tmf-api/salesManagement/v4", createSalesLeadRoutes);

const PORT = process.env.PORT || 3007;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`New Connection & Sales Service running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });