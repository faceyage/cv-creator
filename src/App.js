import React, { Component } from "react";
import "./styles/App.css";

import Form from "./components/Form/Form";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Form />
      </div>
    );
  }
}

export default App;
