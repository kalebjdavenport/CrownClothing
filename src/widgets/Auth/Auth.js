import React from "react";

import "./Auth.style.scss";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = ({ authenticated }) => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
