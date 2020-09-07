import React from "react";
import "./Icon.scss";
import Icons from "../../icons/index"

function Icon({itemName}) {
    const vegetableIcon = Icons[itemName];
    return <div  className="icon">{vegetableIcon}</div>
}

export default Icon