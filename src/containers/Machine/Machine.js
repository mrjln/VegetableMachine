import React, {Component} from "react";
import "./Machine.css";
import MachineWindow from "../../components/MachineWindow/MachineWindow";
import VegetableList from "../../assets/vegetables";

class Machine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinning: false,
            durationSpinInSeconds: 2,
            perspective: true
        }

        // https://codepen.io/werter25/pen/MxRJJV
    }
    SLOTS_PER_REEL = 12;

    spin = () => {
        this.setState({spinning: true});
    };


    getSeed = () => {
        return Math.floor(Math.random() * (this.SLOTS_PER_REEL));
    };

    togglePerspective = () => {
        this.setState((prevState) => ({perspective: !prevState.perspective}));
    };

    render() {
        const listVegetables = [1,2,3].map((ringNumber) => {
            return (<MachineWindow
                    spinning={this.state.spinning}
                    durationSpin={this.state.durationSpinInSeconds}
                    ringNumber={ringNumber}
                    randomVegList={VegetableList}
                    seed={this.getSeed()}/>
            );
        });

        const perspective = this.state.perspective ? "perspective-on" : "perspective-off";


        return (
            <div className="machine">
                <div className="machine-windows">
                    <div id="stage">
                        <div id="rotate" className={perspective}>
                            {listVegetables}
                        </div>
                    </div>
                </div>
                <button className="button-spin" onClick={this.spin}>Spin</button>
                <button className="perspective" onClick={this.togglePerspective}>Toggle perspective</button>


            </div>
        );
    }
}

export default Machine;
