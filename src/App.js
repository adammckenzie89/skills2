import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import routes from "./routes";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectProduct: {},
      edit: false
    };
    this.selectProduct = this.selectProduct.bind(this);
  }
  selectProduct(product) {
    this.setState({ selectProduct: product });
  }

  render() {
    return (
      <HashRouter>
        <Header />
        {routes}
      </HashRouter>
    );
  }
}

export default App;
