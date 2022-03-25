import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./contexts/filter-context";
import "./index.css";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <App />
      </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
