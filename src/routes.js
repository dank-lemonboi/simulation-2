import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import Wizard1 from "./components/wizard/Wizard1.js";
import Wizard2 from "./components/wizard/Wizard2.js";
import Wizard3 from "./components/wizard/Wizard3.js";
import Wizard4 from "./components/wizard/Wizard4.js";
import Wizard5 from "./components/wizard/Wizard5.js";

export default (
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/wizard1" component={Wizard1} />
    <Route path="/wizard2" component={Wizard2} />
    <Route path="/wizard3" component={Wizard3} />
    <Route path="/wizard4" component={Wizard4} />
    <Route path="/wizard5" component={Wizard5} />
  </Switch>
);
