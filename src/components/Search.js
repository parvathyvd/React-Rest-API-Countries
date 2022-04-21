import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../store/country-context";

const Search = () => {
  const onInputChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const { setSearchInput, searchInput, darkMode } = useGlobalContext();
  return (
    <div
      className={darkMode ? "search__wrapper dark__mode" : "search__wrapper"}
    >
      <AiOutlineSearch className="search-icon" />
      <input
        type="text"
        name="search"
        placeholder="Search for a country..."
        id="search"
        value={searchInput}
        onChange={onInputChangeHandler}
      />
    </div>
  );
};

export default Search;
