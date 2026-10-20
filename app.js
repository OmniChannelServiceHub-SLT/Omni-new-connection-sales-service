const express = require("express");
const cors = require("cors");

const createResourceRoutes = require("./src/APIs/createResource/routes/createResourceRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/tmf-api/serviceQualification/v4",
  createResourceRoutes
);

module.exports = app;