import React, { useState } from "react";

import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.style.scss";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
    }
    if (displayName === "") {
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserProfileDocument(user, { displayName });
      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">Sign up for hot styles.</h2>
      <span>Sign up with your email and password.</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="name"
          label="name"
          handleChange={e => setDisplayName(e.target.value)}
          type="text"
          value={displayName}
          required
        />
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
        <FormInput
          name="confirmPassword"
          label="confirm password"
          handleChange={e => setConfirmPassword(e.target.value)}
          type="password"
          value={confirmPassword}
          required
        />

        <div className="btn-row">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
