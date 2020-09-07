import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Rules from "../pages/Rules";
import Base from "../pages/Base";

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
      </Switch>
    </Base>
  </Router>
);

export default Routes;
