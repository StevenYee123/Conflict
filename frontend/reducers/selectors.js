export const grabServers = (state) => {
  return state.entities.servers;
}

export const selectServer = (state, serverId) => {
  return state.entities.servers[serverId];
};

export const grabChannels = (state) => {
  return state.entities.channels
}

export const selectChannel = (state, channelId) => {
  return state.entities.channels[channelId]
}

export const grabMessages = (state) => {
  return state.entities.messages
}