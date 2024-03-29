import "./Catalog.scss";
import React from "react";
import VMtypes from "../../utils/types/types";
import { capitalize } from "../../utils/capitalize";
import { slugifyString } from "../../utils/slugify-string";
import { Link } from "react-router-dom";
import VegetableIconsMap from "../../icons/vegetables";

type catalogProps = {
  catalogItems: VMtypes.MachineItemType[];
};

function Catalog(props: catalogProps) {
  const getItemList = (list: VMtypes.MachineItemType[]) => {
    return list.map((item: VMtypes.MachineItemType, i) => {
      return (
        <Link to={"/" + slugifyString(item.name_en)} key={i}>
          <li className="catalog-list__item">
            <span className="icon">{VegetableIconsMap(item.icon.url)}</span>
            <h3>{capitalize(item.name_en)}</h3>
          </li>
        </Link>
      );
    });
  };

  return <ul className="catalog-list">{getItemList(props.catalogItems)}</ul>;
}

export default Catalog;
