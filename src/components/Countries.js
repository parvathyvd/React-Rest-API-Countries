import React from "react";
import Loader from "../components/UI/Loader";
import CountryDetails from "../components/CountryDetails";
import { Routes, Route, Link } from "react-router-dom";
import CountryItem from "../components/CountryItem";
import { useGlobalContext } from "../store/country-context";
import Search from "./Search";
import Filter from "./Filter";

const Countries = () => {
  const { countries } = useGlobalContext();
  return (
    <>
      <section className="search__filter">
        <Search />
        <Filter />
      </section>
      {countries.length <= 0 && <Loader />}
      <section className="countries">
        {countries.length > 0 &&
          countries.map((country, index) => {
            return (
              <article className="country-list" key={index}>
                <Link to={`/country/${country.name}`}>
                  <CountryItem country={country} />
                </Link>
              </article>
            );
          })}
      </section>
    </>
  );
};

export default Countries;
