import React from "react";
import Machine from "../Machine/Machine";
import { shuffleArray } from "../../utils/shuffle-array";

function MachineContainer({ machineItems }) {
  // The Machine Container is in charge of shuffeling the items randomly and always provinding the proper amountOfSlots

  const getRandomListOfItems = (itemList) => {
    return shuffleArray([...itemList]);
  };

  const getArrayAfterPolonaise = (initialList, amountOfSteps) => {
    return initialList.map((item, index) => {
      let selector = index + (initialList.length - amountOfSteps);
      if (selector >= initialList.length) {
        return initialList[selector - initialList.length];
      }
      return initialList[selector];
    });
  };

  const getShuffledLists = () => {
    const amountOfSlots = 12;
    const amountOfReels = 3;
    const initialList = getRandomListOfItems(machineItems);
    const denominator = amountOfSlots / amountOfReels;
    const list2 = getArrayAfterPolonaise(initialList, denominator);
    const list3 = getArrayAfterPolonaise(initialList, denominator * 2);
    return [initialList, list2, list3];
  };

  return <Machine shuffledItems={getShuffledLists()} />;
}

export default MachineContainer;
