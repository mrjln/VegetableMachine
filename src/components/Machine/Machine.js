import React, {Component} from "react";
import "./Machine.scss";
import MachineWindow from "../../components/MachineWindow/MachineWindow";
import VegetableList from "../../assets/vegetables";

class Machine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spinning: false,
            durationSpinInSeconds: 2,
            perspective: true,
            currentSeeds: [1, 2, 3],
            slotsPerReel: 12
        }

        // https://codepen.io/werter25/pen/MxRJJV
    }


    spin = () => {
        this.setState({spinning: true});
        this.getMachineWindowSeeds([...this.state.currentSeeds]);
    };


    getSeed = () => {
        return Math.floor(Math.random() * (this.state.slotsPerReel));
    };

    togglePerspective = () => {
        this.setState((prevState) => ({perspective: !prevState.perspective}));
    };

    getMachineWindowSeeds = (currentSeeds) => {
        let newSeeds = [];
        while (newSeeds.length < 3) {
            const newSeed = this.getSeed();
            if (currentSeeds.indexOf(newSeed) === -1) newSeeds.push(newSeed)
        }
        this.setState({currentSeeds: newSeeds})
    };

    getRandomVegetableList = (vegetableList) => {
      //   console.log(vegetableList);
      //
      //       let counter = vegetableList.length, temp, index;
      //
      //       while (counter > 0) {
      //           index = Math.floor(Math.random() * counter);
      //           counter--;
      //           temp = vegetableList[counter];
      //           vegetableList[counter] = vegetableList[index];
      //           vegetableList[index] = temp;
      //       }
      //       console.log(vegetableList);
      // return vegetableList
    };

    render() {
        this.getRandomVegetableList(VegetableList);

        const {currentSeeds} = this.state;
        const listVegetables = currentSeeds.map((seed, index) => {
            return (<MachineWindow
                    spinning={this.state.spinning}
                    durationSpin={this.state.durationSpinInSeconds}
                    ringNumber={index + 1}
                    randomVegList={VegetableList}
                    seed={seed}
                    slotsPerReel={this.state.slotsPerReel}
                />
            );
        });

        const perspective = this.state.perspective ? "perspective-on" : "perspective-off";


        return (
            <div className="machine">
                <div className="machine__windows">
                    <div id="stage">
                        <div id="rotate" className={perspective}>
                            {listVegetables}
                        </div>
                    </div>
                </div>
                <div className="machine__buttons">
                    <button className="button button--large" onClick={this.spin}>Spin</button>
                    <button className="button button--large" onClick={this.togglePerspective}>Toggle Perspective</button>
                </div>
            </div>
        );
    }
}

export default Machine;
