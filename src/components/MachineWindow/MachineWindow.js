import React, {Component} from "react";
import "./MachineWindow.css";

class MachineWindow extends Component {
    SLOTS_PER_REEL = 12;
    REEL_RADIUS = 150;

    constructor(props) {
        super(props);
        this.state = {spinning: false, seed: this.getSeed()}
    }

    spin = () => {
        this.setState({spinning: true})
    }

    createSlots = () => {
        let slots = [];
        for (let i = 0; i < this.SLOTS_PER_REEL; i++) {
            let slot = this.getSlot(i);
            slots.push(slot);
        }
        return slots
    };

    getSlot = (i) => {
        let slotAngle = 360 / this.SLOTS_PER_REEL;
        let transFormStyle = {transform: 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + this.REEL_RADIUS + 'px)'};
        let content = ((this.state.seed + i) % 12);
        return <div style={transFormStyle} className="slot">{content}</div>;
    };

    getSeed = () => {
        return Math.floor(Math.random() * (this.SLOTS_PER_REEL));
    };


    createRing = (ringNumber) => {
        let timer = 2;
        const slots = this.createSlots();
        const classRing = this.state.spinning ? "ring spin-" + this.state.seed : "ring";
        const spinningAnimation = this.state.spinning ? {animation: 'back-spin 1s, spin-' + this.state.seed + ' ' + (timer + ringNumber * 0.5) + 's'} : {};
        return <div id={"ring" + ringNumber} style={spinningAnimation} className={classRing}>{slots}</div>;
    };



    render() {
        const ring = this.createRing(this.props.ringNumber);
        return (
            <React.Fragment>
                <div>{ring}</div>
                <button onClick={() => this.spin(ring)}>click</button>
            </React.Fragment>
        )
    };
}

export default MachineWindow;
