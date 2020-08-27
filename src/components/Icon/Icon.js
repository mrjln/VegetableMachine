import React from "react";
import "./Icon.scss";
import VegetableIcons from "../../icons/index"

function Icon({itemName}) {
    const vegetableIcon = VegetableIcons[itemName];
    return <div  className="vegetable-icon">{vegetableIcon}</div>
}

export default Icon