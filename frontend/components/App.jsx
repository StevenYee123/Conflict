import React from "react";
import SplashContainer from "./splash/splash_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ServerIndexContainer from "./server/server_index_container";

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/channels" component={ServerIndexContainer} />
    </Switch>
  </>
);

export default App;
