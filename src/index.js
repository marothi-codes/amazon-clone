import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state/StateProvider";
import reducer, { initialState } from "./redux/reducers/reducer";

// The app's parent component.
import App from "./App";

// Stylesheet.
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
