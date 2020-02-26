import React from "react";
import "./MachineWindow.scss";
import Icon from "../Icon/Icon";

function MachineWindow(props) {
    // props {
    //     spinning: boolean;
    //     durationSpin: number;
    //     ringNumber: number;
    //     randomVegList: Vegetable[];
    //     seed: number;
    //     slotsPerReel: number;
    // }

    const calcReelRadius = (amountOfSlots) => {
      const heightSlot = 80;
      const circumference = heightSlot * amountOfSlots;
      const diameter = circumference / Math.PI;
      const radius = Math.round(diameter / 2);
      return radius;
    };


   const createSlots = () => {
        let slots = [];
        let i = 0;
        console.log(props.slotsPerReel)
        while (i < props.slotsPerReel) {
            let slot = getSlot(i, props.randomVegList[i].name);
            slots.push(slot);
            i++;
        }
        return slots
    };

    const getSlot = (i, veggieName) => {
        let slotAngle = 360 / props.slotsPerReel;
        let transFormStyle = {transform: 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + calcReelRadius(props.slotsPerReel)
            + 'px)'};
        return <div style={transFormStyle} className={"slot " + i }>{i} <Icon vegetableName={veggieName} /></div>;
    };

    const createRing = (ringNumber) => {
        const slots = createSlots();
        const classRing = props.spinning ? "ring spin-" + props.seed : "ring";
        const spinningAnimation = props.spinning
            ? {animation: 'back-spin 1s, spin-' + props.seed + ' ' + (props.durationSpin + ringNumber * 0.5) + 's'}
            : {};
        return <div id={"ring" + ringNumber} style={spinningAnimation} className={classRing}>{slots}</div>;
    };

    const ring = createRing(props.ringNumber);

    return (
        <React.Fragment>
            {ring}
        </React.Fragment>
    )

}

export default MachineWindow;
