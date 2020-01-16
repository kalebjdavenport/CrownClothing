import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Home from "./widgets/Home";
import Shop from "./widgets/shop/Shop";
import Auth from "./widgets/Auth/Auth";
import Navigator from "./widgets/MainNav/Navigator";

function App() {
  return (
    <>
      <Navigator />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </>
  );
}

export default App;
