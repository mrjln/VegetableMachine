import React from "react";

// import VegetableIcons from "../../icons/vegetables/index";
// import CommonIcons from "../../icons/common/index";
// import FeatureIcons from "../../icons/features/index";

const endpoint = "http://localhost:1337";

function CoverPhoto({ img }: any ) {
  return (
    <img
      alt={img.alternativeText}
      src={endpoint + img.url}
    />
  );
}

export default CoverPhoto;