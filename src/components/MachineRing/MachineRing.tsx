import React, { ReactNode} from "react";
import "./MachineRing.scss";
import Icon from "../Icon/Icon";
import VMtypes from "../../utils/types/types"

interface MachineRingProps {
    spinning: boolean,
    durationSpin: number,
    ringNumber: number,
    machineItems: VMtypes.MachineItemType[],
    seed: number,
    slotsPerReel: number,
}

function MachineRing({spinning, durationSpin, ringNumber, machineItems, seed, slotsPerReel}: MachineRingProps) {

    const calcReelRadius = (amountOfSlots:number): number => {
      const heightSlot = 80;
      const circumference = heightSlot * amountOfSlots;
      const diameter = circumference / Math.PI;
      return  Math.round(diameter / 2);
    };

   const createSlots = ():ReactNode => {
        let slots = [];
        let slotNumber = 0;
        while (slotNumber < slotsPerReel) {
            console.log(machineItems[slotNumber].icon.url)
            let slot = machineItems ? getSlot(slotNumber, machineItems[slotNumber].icon) : console.log("items missing", machineItems);
            slots.push(slot);
            slotNumber++;
        }
        return slots
    };

    const getSlot = (i:number, icon: VMtypes.IconType): ReactNode => {
        let slotAngle = 360 / slotsPerReel;
        let transFormStyle = {transform: 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + calcReelRadius(slotsPerReel)
            + 'px)'};
        return <div key={"slot " + i} style={transFormStyle} className={"slot " + i }>
    
        <Icon icon={icon}/>
        </div>;
    };

    const createRing = (ringNumber:number): ReactNode => {
        const slots = createSlots();
        const classRing = spinning ? "ring spin-" + seed : "ring";
        const spinningAnimation = spinning
            ? {animation: 'back-spin 1s, spin-' + seed + ' ' + (durationSpin + ringNumber * 0.5) + 's'}
            : {};
        return <div key={ringNumber} id={"ring" + ringNumber} style={spinningAnimation} className={classRing}>{slots}</div>;
    };

    return (
        <React.Fragment>
            {createRing(ringNumber)}
        </React.Fragment>
    )
}

export default MachineRing;
