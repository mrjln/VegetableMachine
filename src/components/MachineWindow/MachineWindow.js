import React from "react";
import "./MachineWindow.css";

function MachineWindow(props) {
    const SLOTS_PER_REEL = 12;
    const REEL_RADIUS = 150;

    // props {
    //     spinning: boolean;
    //     durationSpin: number;
    //     ringNumber: number;
    //     randomVegList: Vegetable[];
    //     seed: number
    // }


   const createSlots = () => {
        let slots = [];
        for (let i = 0; i < SLOTS_PER_REEL; i++) {
            let slot = getSlot(i, props.randomVegList[i].name);
            slots.push(slot);
        }
        return slots
    };

    const getSlot = (i, veggieName) => {
        let slotAngle = 360 / SLOTS_PER_REEL;
        let transFormStyle = {transform: 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + REEL_RADIUS + 'px)'};
        return <div style={transFormStyle} className="slot"><span class="vegetable-name">{veggieName}</span></div>;
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
