import React from "react";
import "./Icon.scss";
// import VegetableIcons from "../../icons/vegetables/index";
// import CommonIcons from "../../icons/common/index";
// import FeatureIcons from "../../icons/features/index";

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
