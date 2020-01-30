import React from "react";
import "./Icon.css";
import VegetableIcons from "../../icons/index"

function Icon(props) {
    console.log(VegetableIcons[props.vegetableName]);
   const vegetableicon = VegetableIcons[props.vegetableName];
    return <div  className="vegetable-icon">{vegetableicon}</div>

}

export default Icon