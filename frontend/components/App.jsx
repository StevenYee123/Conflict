import React from "react";
import SplashContainer from "./splash/splash_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ServerIndexContainer from "./server/server_index_container";
import ChannelIndexContainer from "./channel/channel_index_container";
import HomepageContentContainer from "./content/homepage_content_container";
import MessagesIndexContainer from "./message/message_index_container";

const App = () => (
  <>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/channels" component={ServerIndexContainer} />
      <ProtectedRoute exact path="/channels/@me" component={HomepageContentContainer} />
      <ProtectedRoute path="/channels/:serverId/:channelId" component={ChannelIndexContainer} />
      <ProtectedRoute exact path="/channels/:serverId/:channelId" component={MessagesIndexContainer} />
  </>
);

export default App;
