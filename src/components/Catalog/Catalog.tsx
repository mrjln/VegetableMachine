import './Catalog.scss';
import React from "react";
import MachineItem from "../../utils/types/types";
import VegetableList from "../../assets/vegetables";
import {capitalize} from "../../utils/capitalize";
import { slugifyString } from "../../utils/slugify-string"
import {
    Link,
} from "react-router-dom";
import Icon from "../Icon/Icon";


function Catalog() {
    const getItemList = (list: MachineItem[]) => {
        return list.map((item: MachineItem) => {
            return <Link to={'/' + slugifyString(item.name.eng)}>
                <li className="catalog-list__item">
                    <Icon itemName={item.camelCase}/>
                    <h3>{capitalize(item.name.eng)}</h3>
                </li>
            </Link>
        })
    };

    return <ul className="catalog-list">{getItemList(VegetableList)}</ul>
}

export default Catalog