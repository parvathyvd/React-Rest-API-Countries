import React from "react";
import { useContext, useState, useEffect } from "react";

const CountryContext = React.createContext();

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [regionSelected, setRegionSelected] = useState("");
  const [error, setError] = useState(false);

  const getCountries = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://restcountries.com/v2/all");
      if (!response.ok) {
        throw new Error(
          `Something went wrong. This country doesn't matches in the country list`
        );
      }
      const result = await response.json();
      console.log(result);
      setError(false);
      setCountries(result);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const getCountriesByName = async (name) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      if (!response.ok) {
        throw new Error(
          `Something went wrong. This country doesn't matches in the country list`
        );
      }
      const result = await response.json();
      console.log(result);
      setCountries(result);
      setError(false);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchInput !== "") {
      getCountriesByName(searchInput);
    }
  }, [searchInput]);

  const getCountriesByRegion = async (regionName) => {
    try {
      setIsLoading(false);
      const response = await fetch(
        `https://restcountries.com/v2/region/${regionName}`
      );
      if (!response.ok) {
        throw new Error(
          `Something went wrong. This country doesn't matches in the country list`
        );
      }
      const result = await response.json();
      // console.log("by region", result);
      setCountries(result);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    if (regionSelected !== "" && regionSelected !== "Filter By Region") {
      setSearchInput("");
      getCountriesByRegion(regionSelected);
    } else {
      setSearchInput("");
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
        isLoading,
        error,
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
