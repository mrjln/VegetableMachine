import React, {Component} from "react";
import "./Machine.css";
import MachineWindow from "../../components/MachineWindow/MachineWindow";
import VegetableList from "../../assets/vegetables";

class Machine extends Component {
    constructor(props) {
        super(props);
        // https://codepen.io/werter25/pen/MxRJJV
    }


    render() {
        const vegetables = VegetableList;
        const listVegetables = vegetables.map(vegetable => {
            return (
                <li>
                    <MachineWindow vegetable={vegetable}/>
                </li>
            );
        });

        const spin = () => {
            console.log("spinning")
        }

        return (
            <div class="machine">
                <ul class="machine-windows">
                    <div id="stage" className="perspective-on">
                        <div id="rotate">
                            {listVegetables}
                        </div>
                    </div>
                </ul>
                <div>
                    <button class="go" onClick={spin}>Start spinning</button>
                </div>
            </div>
        );
    }
}

export default Machine;
