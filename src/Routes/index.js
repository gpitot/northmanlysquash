import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Rules from "../pages/Rules";
import Base from "../pages/Base";
import Social from "../pages/Social/index";

const Routes = () => (
  <Router>
    <Base>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="/social">
          <Social />
        </Route>
      </Switch>
    </Base>
  </Router>
);

export default Routes;
