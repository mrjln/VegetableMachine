import React from "react";
import "./Icon.scss";

const endpoint = "http://localhost:1337";

function Icon({ icon }) {
  return (
    <img
      className="icon"
      alt={icon.alternativeText}
      src={endpoint + icon.url}
    />
  );
}

export default Icon;
