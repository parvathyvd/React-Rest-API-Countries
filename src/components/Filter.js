import React, { useState } from "react";
import { useGlobalContext } from "../store/country-context";
import { AiOutlineDown } from "react-icons/ai";

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
      <span>
        <div name="regions" id="regions">
          <button
            className="filter-region"
            onClick={onSelectHandler}
            value="Filter By Region"
          >
            {selected === "" ? "Filter By Region" : selected}{" "}
            <AiOutlineDown className="down-arrow" />
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
      </span>
    </div>
  );
};

export default Filter;
