import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventoryList: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    axios.get("/api/inventory").then(response => {
      this.setState({ inventoryList: response.data });
    });
  }

  render() {
    return (
      <main>
        <Dashboard {...this.state} />
        <Header />
        <Form handlePost={this.componentDidMount} />
      </main>
    );
  }
}

export default App;
