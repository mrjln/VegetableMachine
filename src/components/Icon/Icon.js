import React from "react";
import "./Icon.css";
import VegetableIcons from "../../icons/index"

function Icon(props) {
    const vegetableIcon = VegetableIcons[props.vegetableName];
    return <div  className="vegetable-icon">{vegetableIcon}</div>
}

export default Icon