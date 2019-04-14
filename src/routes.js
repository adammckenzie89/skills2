import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/add" component={Form} />
  </Switch>
);
