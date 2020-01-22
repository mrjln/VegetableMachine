import React, {Component} from "react";
import "./Machine.css";
import MachineWindow from "../../components/MachineWindow/MachineWindow";
import VegetableList from "../../assets/vegetables";

class Machine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinning: false,
            durationSpinInSeconds: 2
        }

        // https://codepen.io/werter25/pen/MxRJJV
    }
    SLOTS_PER_REEL = 12;

    spin = () => {
        this.forceUpdate();
        const milisec = this.state.durationSpinInSeconds * 1000;
        this.setState({spinning: true});
        setTimeout(this.stopSpinning, milisec);
    };

    stopSpinning = () => {
        // this.setState({spinning: false})
    };

    getSeed = () => {
        return Math.floor(Math.random() * (this.SLOTS_PER_REEL));
    };

    render() {
        const listVegetables = [1,2,3].map((ringnumber) => {
            return (<MachineWindow
                    spinning={this.state.spinning}
                    durationSpin={this.state.durationSpinInSeconds}
                    ringNumber={ringnumber}
                    randomVegList={VegetableList}
                    seed={this.getSeed()}/>
            );
        });


        return (
            <div className="machine">
                <div className="machine-windows">
                    <div id="stage">
                        <div id="rotate" className="perspective-on">
                            {listVegetables}
                        </div>
                    </div>
                </div>
                <button className="button-spin" onClick={this.spin}>Spin</button>
            </div>
        );
    }
}

export default Machine;
