import React, { useState } from "react";

import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.style.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          handleChange={e => setEmail(e.target.value)}
          type="email"
          value={email}
          required
        />

        <FormInput
          name="password"
          label="password"
          handleChange={e => setPassword(e.target.value)}
          type="password"
          value={password}
          required
        />

        <div className="btn-row">
          <CustomButton type="submit">Submit Form</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
