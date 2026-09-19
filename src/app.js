const express = require("express");

const agentCodeRoutes = require("./APIs/listAgentCode/routes/agentCodeRoutes");

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

module.exports = app;
