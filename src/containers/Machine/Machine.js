import React, {Component} from "react";
import "./Machine.css";
import MachineWindow from "../../components/MachineWindow/MachineWindow";
import VegetableList from "../../assets/vegetables";

class Machine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinning: false,
            durationSpin: 2
        }

        // https://codepen.io/werter25/pen/MxRJJV
    }

    spin = () => {
        const milisec = this.state.durationSpin * 1000;
        this.setState({spinning: true});
        setTimeout(this.stopSpinning, milisec);
    };

    stopSpinning = () => {
        this.setState({spinning: false})
    };


    render() {
        const vegetables = VegetableList;
        const listVegetables = vegetables.map((vegetable, index) => {
            return (<MachineWindow
                    spinning={this.state.spinning}
                    durationSpin={this.state.durationSpin}
                    ringNumber={index}
                    vegetable={vegetable}/>
            );
        });


        return (
            <div class="machine">
                <div class="machine-windows">
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
