import React from "react";
import ReactDOM from "react-dom/client";
import Context from "./contex";
import Root from "./root";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Context>
        <Root />
      </Context>
    </Router>
  </React.StrictMode>
);
