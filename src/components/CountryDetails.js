import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useGlobalContext } from "../store/country-context";

const CountryDetails = () => {
  const { darkMode } = useGlobalContext();
  const { countryName } = useParams();
  // console.log(countryName);
  const [country, setCountry] = useState([]);
  const [borders, setBorders] = useState([]);

  const getCountriesByName = async (countryName) => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${countryName}`
    );
    const result = await response.json();
    result.forEach((border) => setBorders(border.borders));
    // console.log(result, borders.length);
    setCountry(result);
  };

  useEffect(() => {
    const result = getCountriesByName(countryName);
    setCountry(result);
  }, [countryName]);

  // console.log("country borders", country[0].borders);
  return (
    <section
      className={
        darkMode
          ? "country-details-wrapper dark__mode"
          : "country-details-wrapper"
      }
    >
      <div className="country-details">
        <Link to="/">
          <button className="btn btn-back">
            <AiOutlineArrowLeft className="arrow-left" />
            Back
          </button>
        </Link>
        {Object.keys(country).length !== 0 && (
          <div className="country-info-details">
            <div className="flag">
              <img src={country[0].flag} alt={`flag of${country[0].name}`} />
            </div>

            <div className="first-section">
              <h3>{country[0].name}</h3>
              <p>
                <span>Native Name: </span>
                {country[0].nativeName}
              </p>
              <p>
                <span>Population: </span>
                {country[0].population.toLocaleString("en-US")}
              </p>
              <p>
                <span>Region: </span>
                {country[0].region}
              </p>
              <p>
                <span>Sub Region: </span>
                {country[0].region}
              </p>
              <p>
                <span>Capital: </span>
                {country[0].region}
              </p>
            </div>
            <div className="second-section">
              <p>
                <span>Top Level Domain: </span>
                {country[0].topLevelDomain[0]}
              </p>
              <p>
                <span>Currencies: </span>
                {country[0].currencies[0].name}
              </p>
              <p>
                <span>Languages: </span>
                {country[0].languages.map((lg, index) => {
                  return (
                    <span className="languages" key={index}>
                      {lg.name}
                    </span>
                  );
                })}
              </p>
            </div>
            <div className="border">
              {country[0].borders !== undefined && (
                <p>
                  <span>Border Countries: </span>
                  {country[0].borders.map((br, index) => {
                    return (
                      <button className="btn btn-border" key={index}>
                        {br}
                      </button>
                    );
                  })}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryDetails;
