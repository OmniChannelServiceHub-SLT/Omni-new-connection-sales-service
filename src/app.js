const express = require("express");

const agentCodeRoutes = require("./APIs/listAgentCode/routes/agentCodeRoutes");
const quoteRoutes = require("./APIs/listInitiationNewConCharges/routes/quoteRoutes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) =>
  res.status(200).json({
    status: "UP",
    service: "new-connection-sales-service",
  })
);

app.use(
  "/tmf-api/leadManagement/v4/agent",
  agentCodeRoutes
);

app.use(
  "/tmf-api/quoteManagement/v4/quote",
  quoteRoutes
);

module.exports = app;
