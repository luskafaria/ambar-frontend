import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "views/Home";
import MaxMin from "views/MaxMin";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />

    <Route path="/max-min" component={MaxMin} />
  </Switch>
);

export default Routes;
