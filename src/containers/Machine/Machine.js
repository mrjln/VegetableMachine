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
            perspective: true,
            currentSeeds: [1,2,3]
        }

        // https://codepen.io/werter25/pen/MxRJJV
    }
    SLOTS_PER_REEL = 12;

    spin = () => {
        this.setState({spinning: true});
        this.getMachineWindowSeeds([...this.state.currentSeeds]);
    };


    getSeed = () => {
        return Math.floor(Math.random() * (this.SLOTS_PER_REEL));
    };

    togglePerspective = () => {
        this.setState((prevState) => ({perspective: !prevState.perspective}));
    };

    getMachineWindowSeeds = (currentSeeds) => {
        let newSeeds = [];
        while(newSeeds.length < 3) {
            const newSeed = this.getSeed();
            if(currentSeeds.indexOf(newSeed) === -1) newSeeds.push(newSeed)
        }
       this.setState({currentSeeds: newSeeds})
    };

    render() {
        const { currentSeeds } = this.state;
        const listVegetables = currentSeeds.map((seed, index) => {
            return (<MachineWindow
                    spinning={this.state.spinning}
                    durationSpin={this.state.durationSpinInSeconds}
                    ringNumber={index + 1}
                    randomVegList={VegetableList}
                    seed={seed}/>
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
                <button className="button button-spin" onClick={this.spin}>Spin</button>
                <button className="button perspective" onClick={this.togglePerspective}>Toggle perspective</button>


            </div>
        );
    }
}

export default Machine;
