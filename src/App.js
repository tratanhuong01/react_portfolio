import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "./screens/MainPage";

function App(props) {
  //
  //
  return (
    <Router>
      <Switch>
        <MainPage />
      </Switch>
    </Router>
  );
}

export default App;
