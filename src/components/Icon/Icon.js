import React from "react";
import "./Icon.scss";
import VegetableIcons from "../../icons/vegetables/index"
import CommonIcons from "../../icons/common/index"
import FeatureIcons from "../../icons/features/index"

function Icon({itemName}) {
    const icons = {...VegetableIcons, ...CommonIcons, ...FeatureIcons};
    const selectedIcon = icons[itemName];
    return <div  className="icon">{selectedIcon}</div>
}

export default Icon