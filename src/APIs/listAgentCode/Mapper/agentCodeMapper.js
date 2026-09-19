const mapAgentCodeResponse = (agents) => {
  return agents.map((agent) => ({
    agentCode: agent.agentCode,
    name: agent.name,
    channel: agent.channel,
    status: agent.status,
    relatedParty: agent.relatedParty,
  }));
};

module.exports = {
  mapAgentCodeResponse,
};
