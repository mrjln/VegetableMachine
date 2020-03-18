import React from "react";

function MachineItemDetailPage({machineItem}) {

    return <div className="machine-details">
        <h1> {machineItem.name.nl}</h1>
        <a href={"https://www.ah.nl/allerhande/recepten-zoeken?Ntt="+ machineItem.name.nl}>
            <button target="_blank" className="button button--primary button--large navigation__button"> Zoek een recept met {machineItem.name.nl}</button>
        </a>
    </div>
}

export default MachineItemDetailPage