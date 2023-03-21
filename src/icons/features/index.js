import React from "react";

import { ReactComponent as MuscularArmOutline } from "./muscular-arm-outline.svg";
import { ReactComponent as BloodPressure } from "./blood-pressure.svg";
import { ReactComponent as Hangover } from "./hangover.svg";

const FeatureIconsMap = (iconName) => {
  switch (iconName) {
    case "muscularArmOutline":
      return <MuscularArmOutline />;
    case "bloodPressure":
      return <BloodPressure />;
    case "hangover":
      return <Hangover />;
    default:
      return <MuscularArmOutline />;
  }
};

export default FeatureIconsMap;
