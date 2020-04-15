import React from "react";
import SplashContainer from "./splash/splash_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ServerIndexContainer from "./server/server_index_container";
import ChannelIndexContainer from "./channel/channel_index_container";
import HomiesIndexContainer from "./homies/homies_index_container";
import DirectMessageIndexContainer from "./direct_message/direct_message_index_container";
import MessagesIndexContainer from "./message/message_index_container";

const App = () => (
  <>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/servers" component={ServerIndexContainer} />
      <ProtectedRoute path="/servers/@me" component={HomiesIndexContainer} />
      <ProtectedRoute exact path="/servers/@me/:homieId" component={DirectMessageIndexContainer} />
      <ProtectedRoute exact path="/servers/:serverId/channel/:channelId" component={ChannelIndexContainer} />
      <ProtectedRoute exact path="/servers/:serverId/channel/:channelId" component={MessagesIndexContainer} />
  </>
);

export default App;
