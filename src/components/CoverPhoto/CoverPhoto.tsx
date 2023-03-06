import React from "react";

// import VegetableIcons from "../../icons/vegetables/index";
// import CommonIcons from "../../icons/common/index";
// import FeatureIcons from "../../icons/features/index";

// const endpoint = "http://localhost:1337";

function CoverPhoto({ img }: any) {
  console.log(img);
  return (
    <img
      alt={img.alternativeText}
      src={require(`../../assets/images/${img}`)}
    />
  );
}

export default CoverPhoto;
