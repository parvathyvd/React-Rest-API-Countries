import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import { useGlobalContext } from "./store/country-context";

const App = () => {
  const { darkMode } = useGlobalContext();

  return (
    <>
      <Header />
      <main className={darkMode ? "main-dark__mode" : ""}>
        <Routes>
          <Route path="/" exact element={<Countries />}></Route>
          <Route
            path="/country/:countryName"
            exact
            element={<CountryDetails />}
          ></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
