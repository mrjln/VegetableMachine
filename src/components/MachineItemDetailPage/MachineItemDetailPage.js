import React from "react";
import Icon from "../Icon/Icon";
import "./MachineItemDetailPage.scss";


function MachineItemDetailPage({machineItem}) {

    return <div className="machine-item-detail">
        <span className="machine-item-detail__icon">
        <Icon machineItemName={machineItem.name.eng}/>
        </span>
        <h1 className="machine-item-detail__title"> {machineItem.name.nl} </h1>

        <a href={"https://www.ah.nl/allerhande/recepten-zoeken?Ntt=" + machineItem.name.nl}>
            <button target="_blank" className="button button--primary button--large navigation__button"> Zoek een recept
                met {machineItem.name.nl}</button>
        </a>
    </div>
}

export default MachineItemDetailPage