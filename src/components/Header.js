import React from "react";
import { BsMoon } from "react-icons/bs";
import { useGlobalContext } from "../store/country-context";

const Header = () => {
  const { darkMode, setDarkMode } = useGlobalContext();
  const onClickModeChange = () => {
    console.log("click");
    setDarkMode(!darkMode);
  };
  return (
    <header className={darkMode ? "header dark__mode" : "header"}>
      <h2>Where in the world ?</h2>
      <div className="mode" onClick={onClickModeChange}>
        <BsMoon className="moon-icon" />
        <h4>Dark Mode</h4>
      </div>
    </header>
  );
};

export default Header;
