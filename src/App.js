import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./widgets/Home";
import Shop from "./widgets/shop/Shop";
import Auth from "./widgets/Auth/Auth";
import Navigator from "./widgets/MainNav/Navigator";

import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App({ setCurrentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
