import React, {Component} from "react";
import "./Machine.scss";
import MachineWindow from "../../components/MachineWindow/MachineWindow";
import VegetableList from "../../assets/vegetables";

class Machine extends Component {

    constructor(props) {
        super(props);

        const initSeeds = [0,5,2];
        const randomItemLists = this.getRandomItemLists(initSeeds);
        const newWinners = initSeeds.map((seed, index) => randomItemLists[index][seed])

        this.state = {
            spinning: false,
            durationSpinInSeconds: 2,
            perspective: true,
            slotsPerReel: 12,
            windowsInfo: {currentSeeds: initSeeds, randomItemLists: randomItemLists, winners: newWinners}
        };
        // https://codepen.io/werter25/pen/MxRJJV
        // this.initializeNewMachine()
    }

    spin = () => {
        this.setState({spinning: true});
        this.initializeNewMachine()
    };

    getRandomItemLists = (seeds) => {
        return seeds.map(() => {
            return this.getRandomVegetableList(VegetableList);
        });
    };


    initializeNewMachine = () => {
        const newSeeds = this.getMachineWindowSeeds([...this.state.windowsInfo.currentSeeds]);
        const newRandomItemLists = newSeeds.map(() => {
            return this.getRandomVegetableList(VegetableList);
        });
        const newWinners = newSeeds.map((seed, index) => newRandomItemLists[index][seed])
        this.setState({windowsInfo: {currentSeeds: newSeeds, randomItemLists: newRandomItemLists, winners: newWinners}})
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
        return newSeeds;
    };

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }

    getRandomVegetableList = (vegetableList) => {
        return this.shuffleArray(vegetableList);
    };

    createMachineWindow = (randomItemList, seed, index) => {
        return (<MachineWindow
            key={index}
            spinning={this.state.spinning}
            durationSpin={this.state.durationSpinInSeconds}
            ringNumber={index + 1}
            randomVegList={randomItemList}
            seed={seed}
            slotsPerReel={this.state.slotsPerReel}
        />)
    };


    render() {
        const listVegetables = this.state.windowsInfo.currentSeeds.map((seed, index) => {
            return this.createMachineWindow(this.state.windowsInfo.randomItemLists[index], seed, index)
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
                    <button className="button button--primary button--large" onClick={this.spin}>Spin</button>
                    <button className="button button--secondary button--large" onClick={this.togglePerspective}>Toggle
                        Perspective
                    </button>
                </div>
            </div>
        );
    }
}

export default Machine;
