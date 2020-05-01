import React from "react";
import Icon from "../Icon/Icon";
import "./MachineItemDetailPage.scss";


function MachineItemDetailPage({machineItem}) {

    return <div className="machine-item-detail">
        <span className="machine-item-detail__icon">
        <Icon machineItemName={machineItem.name.eng}/>
        </span>
        <h1> {machineItem.name.nl} </h1>
        <p>I'm baby vegan pitchfork blue bottle, cardigan copper mug drinking
            vinegar af pork belly intelligentsia tumblr chicharrones polaroid air plant pok pok. Direct trade man braid
            aesthetic, lomo meggings copper mug fam actually post-ironic wayfarers. Biodiesel lumbersexual trust fund
            plaid. Edison bulb pitchfork hot chicken skateboard, godard chicharrones mumblecore hella direct trade
            semiotics la croix leggings chillwave fanny pack prism.</p>

        <a href={"https://www.ah.nl/allerhande/recepten-zoeken?Ntt=" + machineItem.name.nl}>
            <button target="_blank" className="button button--leave-site">
                <span>
                    Zoek een recept met {machineItem.name.nl}
                </span>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928932C12.9526 0.538408 12.3195 0.538408 11.9289 0.928932C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM0 9H19V7H0V9Z"
                        fill="#7C9073"/>
                </svg>
            </button>

        </a>
    </div>
}

export default MachineItemDetailPage