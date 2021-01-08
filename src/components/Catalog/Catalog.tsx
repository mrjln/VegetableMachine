import './Catalog.scss';
import React from "react";
import VMtypes from "../../utils/types/types";
import {capitalize} from "../../utils/capitalize";
import {slugifyString} from "../../utils/slugify-string";
import {camelize} from "../../utils/camelize";
import {
    Link,
} from "react-router-dom";
import Icon from "../Icon/Icon";


function Catalog() {
    const getItemList = (list: VMtypes.MachineItemType[]) => {
        return list.map((item: VMtypes.MachineItemType) => {
            return <Link to={'/' + slugifyString(item.name_en)}>
                <li className="catalog-list__item">
                    <Icon icon={item.icon}/>
                    <h3>{capitalize(item.name_en)}</h3>
                </li>
            </Link>
        })
    };

    return <ul className="catalog-list">{
        // getItemList(VegetableList)
        }</ul>
}

export default Catalog