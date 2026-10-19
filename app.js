const express = require("express");
const cors = require("cors");

const createCheckServiceRoutes = require("./src/APIs/createCheckService/routes/createCheckServiceRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/tmf-api/serviceQualification/v4",
  createCheckServiceRoutes
);

module.exports = app;