import React from "react";
import { useContext, useState, useEffect } from "react";

const CountryContext = React.createContext();

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [regionSelected, setRegionSelected] = useState("");

  const getCountries = async () => {
    setIsLoading(true);
    const response = await fetch("https://restcountries.com/v2/all");
    const result = await response.json();
    console.log(result);
    setCountries(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const getCountriesByName = async (name) => {
    setIsLoading(true);
    const response = await fetch(`https://restcountries.com/v2/name/${name}`);
    const result = await response.json();
    console.log(result);
    setCountries(result);
    setIsLoading(false);
  };

  useEffect(() => {
    if (searchInput !== "") {
      getCountriesByName(searchInput);
    }
  }, [searchInput]);

  const getCountriesByRegion = async (regionName) => {
    setIsLoading(true);
    const response = await fetch(
      `https://restcountries.com/v2/region/${regionName}`
    );
    const result = await response.json();
    console.log("by region", result);
    setCountries(result);
    setIsLoading(false);
  };
  useEffect(() => {
    if (regionSelected !== "" && regionSelected !== "Filter By Region") {
      getCountriesByRegion(regionSelected);
    } else {
      getCountries();
    }
  }, [regionSelected]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        setSearchInput,
        searchInput,
        darkMode,
        setDarkMode,
        regionSelected,
        setRegionSelected,
        getCountriesByName,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CountryContext);
};

export { CountryContext, CountryProvider };
