import React, {Component} from "react";
import "./Machine.scss";
import MachineWindow from "../../components/MachineWindow/MachineWindow";
import Modal from "../../containers/Modal/Modal";
import VegetableList from "../../assets/vegetables";

class Machine extends Component {

    constructor(props) {
        super(props);

        const initMachineState = this.initializeNewMachine();

        this.state = {
            spinning: false,
            showModal: true,
            durationSpinInSeconds: 2,
            perspective: true,
            slotsPerReel: 12,
            ...initMachineState
        };
        // https://codepen.io/werter25/pen/MxRJJV
    }

    spin = () => {
        this.setState({spinning: true});
        const newMachineState = this.initializeNewMachine(this.state.windowsInfo.currentSeeds);
        this.updateState(newMachineState);

    };

    toggleModal = () => {
        if (this.state.showModal) {
            const showModalAfterSecs = this.state.durationSpinInSeconds + 5 * 1000;
            setTimeout(() => {
                this.setState({showModal: true})
            }, showModalAfterSecs);
        }
        this.setState({showModal: false})
    };

    updateState = (newState) => {
        this.setState({...newState});
    };

    initializeNewMachine = (currentSeeds) => {
        const newSeeds = currentSeeds ? this.getMachineWindowSeeds([currentSeeds]) : [1, 5, 7];
        const newRandomItemLists = newSeeds.map(() => {
            return this.getRandomListOfItems(VegetableList);
        });
        const newWinners = newSeeds.map((seed, index) => newRandomItemLists[index][seed]);
        return {windowsInfo: {currentSeeds: newSeeds, randomItemLists: newRandomItemLists, winners: newWinners}}
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

    getRandomListOfItems = (itemList) => {
        return this.shuffleArray(itemList);
    };

    createMachineWindow = (randomListMachineItems, seed, index) => {
        return (<MachineWindow
            key={index}
            spinning={this.state.spinning}
            durationSpin={this.state.durationSpinInSeconds}
            ringNumber={index + 1}
            randomListMachineItems={randomListMachineItems}
            seed={seed}
            slotsPerReel={this.state.slotsPerReel}
        />)
    };

    render() {
        const listVegetables = this.state.windowsInfo.currentSeeds.map((seed, index) => {
            return this.createMachineWindow(this.state.windowsInfo.randomItemLists[index], seed, index)
        });
        console.log(this.state.windowsInfo.winners);
        const winnerListItems = this.state.windowsInfo.winners.map(winner => <li>{winner.name}</li>);
        console.log("item", winnerListItems)

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
                {this.state.showModal ? <Modal cta={"Spin Again"} clickCTA={this.toggleModal}>
                    <ul> {winnerListItems}</ul>
                </Modal> : ""}
            </div>

        );
    }
}

export default Machine;
