import React from "react";
import Loader from "../components/UI/Loader";
import { Link } from "react-router-dom";
import CountryItem from "../components/CountryItem";
import { useGlobalContext } from "../store/country-context";
import Search from "./Search";
import Filter from "./Filter";

const Countries = () => {
  const { countries, isLoading, error } = useGlobalContext();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div className="center">
        <h2 className="text-center pt-5">
          No Countries matched your search criteria
        </h2>
        <button
          className="btn-back btn-center"
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <>
      <section className="search__filter">
        <Search />
        <Filter />
      </section>

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
