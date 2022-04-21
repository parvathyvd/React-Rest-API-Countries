import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CountryProvider } from "./store/country-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountryProvider>
      <Router>
        <App />
      </Router>
    </CountryProvider>
  </React.StrictMode>
);
