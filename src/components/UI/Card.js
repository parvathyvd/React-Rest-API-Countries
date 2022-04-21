import React from "react";
import { useGlobalContext } from "../../store/country-context";

const Card = (props) => {
  const { darkMode } = useGlobalContext();
  return (
    <div className={darkMode ? "card dark__mode" : "card"}>
      {props.children}
    </div>
  );
};

export default Card;
