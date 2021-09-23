import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="app">
        <>
          <Switch>
            <Route path="/checkout">
              <Header />
              <h1>The Shopping Cart</h1>
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
