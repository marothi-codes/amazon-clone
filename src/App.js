import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./state/StateProvider";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import SignIn from "./components/SignIn";

// Stylesheet
import "./App.css";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // This function (useEffect) only runs when the App Component renders.
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

      if (authUser) {
        // The is logged in / the user just logged in.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out.
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </>
      </div>
    </Router>
  );
}

export default App;
