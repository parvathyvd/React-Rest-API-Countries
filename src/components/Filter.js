import React, { useState } from "react";
import { useGlobalContext } from "../store/country-context";

const Filter = () => {
  const { darkMode, setRegionSelected } = useGlobalContext();
  const [selected, setSelected] = useState("Filter By Region");
  const [showDropdown, setShowDropdown] = useState(false);
  const onSelectHandler = (e) => {
    setRegionSelected(e.target.value);
    console.log("clicked filter", e.target.value);
    setSelected(e.target.value);
    setShowDropdown(!showDropdown);
  };
  const options = [
    {
      name: "Africa",
      value: "Africa",
    },
    {
      name: "Americas",
      value: "Americas",
    },
    {
      name: "Asia",
      value: "Asia",
    },
    {
      name: "Antarctic",
      value: "Antarctic",
    },
    {
      name: "Europe",
      value: "Europe",
    },
    {
      name: "Oceania",
      value: "Oceania",
    },
    {
      name: "Polar",
      value: "Polar",
    },
  ];
  return (
    <div
      className={darkMode ? "filter__wrapper dark__mode" : "filter__wrapper"}
    >
      <div name="regions" id="regions">
        <button
          className="filter-region"
          onClick={onSelectHandler}
          value="Filter By Region"
        >
          {selected === "" ? "Filter By Region" : selected}{" "}
        </button>
        {showDropdown && (
          <div className="options-wrapper">
            {options.map((option) => {
              return (
                <button
                  className={
                    selected === option.value ? "option selected" : "option"
                  }
                  value={option.value}
                  onClick={onSelectHandler}
                >
                  {option.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
