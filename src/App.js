import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./widgets/Home";
import Shop from "./widgets/shop/Shop";
import Auth from "./widgets/Auth/Auth";
import Navigator from "./widgets/MainNav/Navigator";

import { auth } from "./firebase/firebase.utils";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <>
      <Navigator currentUser={user} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </>
  );
}

export default App;
