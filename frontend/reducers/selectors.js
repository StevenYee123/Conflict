export const selectServer = (state, serverId) => {
  return state.entities.servers[serverId];
};

export const grabChannels = (state) => {
  return state.entities.channels
}

export const selectChannel = (state, channelId) => {
  return state.entities.channels[channelId]
}
