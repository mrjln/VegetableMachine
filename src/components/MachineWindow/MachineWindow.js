import React, {Component} from "react";
import "./MachineWindow.css";
import VegetableList from "../../assets/vegetables";

class MachineWindow extends Component {
    SLOTS_PER_REEL = 12;
    REEL_RADIUS = 150;

    constructor(props) {
        super(props);
        // props {
        //     spinning: boolean;
        //     durationSpin: number;
        //     ringNumber: number;
        //     randomVegList: Vegetable[];
        //     seed: number
        // }
    }

    createSlots = () => {
        let slots = [];
        for (let i = 0; i < this.SLOTS_PER_REEL; i++) {
            const veggies = this.props.randomVegList
            let slot = this.getSlot(i, veggies[i].name);
            slots.push(slot);
        }
        return slots
    };

    getSlot = (i, veggies) => {
        let slotAngle = 360 / this.SLOTS_PER_REEL;
        let transFormStyle = {transform: 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + this.REEL_RADIUS + 'px)'};
        let content = veggies
        return <div style={transFormStyle} className="slot">{content}</div>;
    };

    createRing = (ringNumber) => {
        const slots = this.createSlots();
        const classRing = this.props.spinning ? "ring spin-" + this.props.seed : "ring";
        const spinningAnimation = this.props.spinning
            ? {animation: 'back-spin 1s, spin-' + this.props.seed + ' ' + (this.props.durationSpin + ringNumber * 0.5) + 's'}
            : {};
        return <div id={"ring" + ringNumber} style={spinningAnimation} className={classRing}>{slots}</div>;
    };


    render() {
        const ring = this.createRing(this.props.ringNumber);
        return (
            <React.Fragment>
                {ring}
            </React.Fragment>
        )
    };
}

export default MachineWindow;
