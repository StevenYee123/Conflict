export const selectServer = (state, serverId) => {
  return state.entities.servers[serverId];
};
