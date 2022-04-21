import React from "react";
import Card from "./UI/Card";

const CountryItem = ({ country }) => {
  return (
    <Card className="country-item" country={country}>
      <div className="flag-img">
        <img
          className="img"
          src={country.flag}
          alt={`flag of ${country.name}`}
        />
      </div>
      <div className="info">
        <h3>{country.name}</h3>
        <ul>
          <li>
            <span>Population: </span>
            {country.population === ""
              ? "N/A"
              : country.population.toLocaleString("en-US")}
          </li>
          <li>
            <span>Region: </span>
            {country.region}
          </li>
          <li>
            <span>Capital: </span>
            {country.capital === "" ? "N/A" : country.capital}
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default CountryItem;
