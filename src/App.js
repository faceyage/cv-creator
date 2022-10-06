import React from "react";
import "./styles/App.css";

import Form from "./components/Form/Form";
import Header from "./components/Header";

function App(props) {
  return (
    <div className="App">
      <Header></Header>
      <Form />
    </div>
  );
}

export default App;
