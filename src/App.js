import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "./screens/MainPage";
import { AppProvider } from "./contexts/AppContext";

function App(props) {
  //
  //
  return (
    <Router>
      <Switch>
        <AppProvider>
          <MainPage />
        </AppProvider>
      </Switch>
    </Router>
  );
}

export default App;
