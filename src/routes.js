import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

export default (
  <Switch>
    <Route path="/" component={Dashboard} />
    <Route path="/Header" component={Header} />
    <Route path="/Form" component={Form} />
  </Switch>
);
