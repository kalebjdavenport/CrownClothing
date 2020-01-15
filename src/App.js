import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Home from "./widgets/Home";
import Shop from "./widgets/shop/Shop";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
    </>
  );
}

export default App;
