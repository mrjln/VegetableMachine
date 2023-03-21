// import React from "react";
import "./Icon.scss";
import VegetableIconsMap from "../../icons/vegetables/index";
// import CommonIcons from "../../icons/common/index";
// import FeatureIcons from "../../icons/features/index";

// const endpoint = "http://localhost:1337";

// console.log("../../icons/vegetables/" + icon.url);

function Icon({ icon }) {
  return VegetableIconsMap(icon.url);
}

export default Icon;
