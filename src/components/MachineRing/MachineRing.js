import React from "react";
import "./MachineRing.scss";
import Icon from "../Icon/Icon";

function MachineRing({spinning, durationSpin, ringNumber, randomListMachineItems, seed, slotsPerReel}) {

    const calcReelRadius = (amountOfSlots) => {
      const heightSlot = 80;
      const circumference = heightSlot * amountOfSlots;
      const diameter = circumference / Math.PI;
      return  Math.round(diameter / 2);
    };

   const createSlots = () => {
        let slots = [];
        let slotNumber = 0;
        while (slotNumber < slotsPerReel) {
            let slot = randomListMachineItems ? getSlot(slotNumber, randomListMachineItems[slotNumber].name.eng) : console.log("items missing", randomListMachineItems);
            slots.push(slot);
            slotNumber++;
        }
        return slots
    };

    const getSlot = (i, itemName) => {
        let slotAngle = 360 / slotsPerReel;
        let transFormStyle = {transform: 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + calcReelRadius(slotsPerReel)
            + 'px)'};
        return <div key={"slot " + i} style={transFormStyle} className={"slot " + i }>{i} <Icon machineItemName={itemName} /></div>;
    };

    const createRing = (ringNumber) => {
        const slots = createSlots();
        const classRing = spinning ? "ring spin-" + seed : "ring";
        const spinningAnimation = spinning
            ? {animation: 'back-spin 1s, spin-' + seed + ' ' + (durationSpin + ringNumber * 0.5) + 's'}
            : {};
        return <div key={ringNumber} id={"ring" + ringNumber} style={spinningAnimation} className={classRing}>{slots}</div>;
    };

    const ring = createRing(ringNumber);

    return (
        <React.Fragment>
            {ring}
        </React.Fragment>
    )

}

export default MachineRing;
