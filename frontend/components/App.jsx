import React from "react";
import SplashContainer from "./splash/splash_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    <header>
      <span>Conflict</span>
      <SplashContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
