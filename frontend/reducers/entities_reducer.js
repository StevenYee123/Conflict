import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import serversReducer from "./servers_reducer";
import channelsReducer from "./channels_reducer";
import messagesReducer from "./messages_reducer";
import homiesReducer from "./homies_reducer";
import directMessagesReducer from "./direct_messages_reducer";

const entitiesReducer = combineReducers({
  channels: channelsReducer,
  directMessages: directMessagesReducer,
  homies: homiesReducer,
  messages: messagesReducer,
  servers: serversReducer,
  users: usersReducer,
});

export default entitiesReducer;
