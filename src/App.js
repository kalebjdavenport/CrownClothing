import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Homepage from "./navigators/Homepage";

function App() {
  return (
    <>
      <Route exact path="/" component={Homepage} />
    </>
  );
}

export default App;
