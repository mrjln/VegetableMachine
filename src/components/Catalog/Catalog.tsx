import './Catalog.scss';
import React from "react";
import MachineItem from "../../utils/types/types";
import VegetableList from "../../assets/vegetables";
import {capitalize} from "../../utils/capitalize";
import {slugifyString} from "../../utils/slugify-string";
import {camelize} from "../../utils/camelize";
import {
    Link,
} from "react-router-dom";
import Icon from "../Icon/Icon";


function Catalog() {
    const getItemList = (list: MachineItem[]) => {
        return list.map((item: MachineItem) => {
            return <Link to={'/' + slugifyString(item.name_en)}>
                <li className="catalog-list__item">
                    <Icon itemName={camelize(item.name_en)}/>
                    <h3>{capitalize(item.name_en)}</h3>
                </li>
            </Link>
        })
    };

    return <ul className="catalog-list">{getItemList(VegetableList)}</ul>
}

export default Catalog