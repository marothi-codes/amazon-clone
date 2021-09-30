import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

// Stylesheet
import "./SignIn.css";

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password, setPassword)
      .then((userCredential) => {
        if (userCredential) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="signin">
      <Link to="/">
        <img
          className="signin__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="signin__container">
        <h3>Sign In</h3>

        <form onSubmit={signIn}>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="signin__button" type="submit">
            Sign In
          </button>
        </form>

        <p>
          By signing in, you agree to the Amazon Clone's Conditions of use &amp;
          sale. Please see our Privacy Policy, our Cookies Notice and our
          Internet-Based Ads.
        </p>

        <button className="signin__createAccountButton" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default SignIn;
