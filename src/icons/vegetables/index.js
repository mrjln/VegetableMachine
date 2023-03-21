import React from "react";
import { ReactComponent as Asparagus } from "./asparagus.svg";
import { ReactComponent as Artichoke } from "./artichoke.svg";
import { ReactComponent as Aubergine } from "./aubergine.svg";
import { ReactComponent as Broccoli } from "./broccoli.svg";
import { ReactComponent as BrusselsSprouts } from "./brussels-sprouts.svg";
import { ReactComponent as Leek } from "./leek.svg";
import { ReactComponent as Lettuce } from "./lettuce.svg";
import { ReactComponent as Mushroom } from "./mushroom.svg";
import { ReactComponent as Onion } from "./onion.svg";
import { ReactComponent as Paprika } from "./paprika.svg";
import { ReactComponent as Pumpkin } from "./pumpkin.svg";
import { ReactComponent as SweetPotato } from "./sweet-potato.svg";

const VegetableIconsMap = (iconName) => {
  switch (iconName) {
    case "artichoke":
      return <Artichoke />;
    case "asparagus":
      return <Asparagus />;
    case "broccoli":
      return <Broccoli />;
    case "brusselsSprouts":
      return <BrusselsSprouts />;
    case "leek":
      return <Leek />;
    case "lettuce":
      return <Lettuce />;
    case "mushroom":
      return <Mushroom />;
    case "paprika":
      return <Paprika />;
    case "pumpkin":
      return <Pumpkin />;
    case "onion":
      return <Onion />;
    case "sweetPotato":
      return <SweetPotato />;
    default:
      return <SweetPotato />;
  }
};

export default VegetableIconsMap;
