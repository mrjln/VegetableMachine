import React, {Component, ReactElement} from "react";
import "./Machine.scss";
import MachineRing from "../../components/MachineRing/MachineRing";
import MachineWindow from "../../components/MachineWindow/MachineWindow";
import Modal from "../../containers/Modal/Modal";
import Icon from "../Icon/Icon";
import {
    Link,
} from "react-router-dom";

interface MachineItem {
    id: number,
    name: {eng: string, nl: string}
}

interface MachineState {
    spinning: boolean,
    showModal: boolean,
    durationSpinInSeconds: number,
    slotsPerReel: number,
    currentSeeds: number[],
    winners: MachineItem[],
}

interface MachineProps {
    shuffledItems: Array<MachineItem[]>
}

class Machine extends Component<MachineProps, MachineState> {

    constructor(props: any) {
        super(props);
        const initMachineState = this.initializeNewMachine();

        this.state = {
            spinning: false,
            showModal: false,
            durationSpinInSeconds: 2,
            slotsPerReel: 12,
            ...initMachineState
        };
        // https://codepen.io/werter25/pen/MxRJJV
    }

    spin = () => {
        this.setState({spinning: true});
        const newMachineState = this.initializeNewMachine(this.state.currentSeeds);
        this.updateState(newMachineState);
        this.toggleModal()
    };

    toggleModal = () => {
        if (!this.state.showModal) {
            const showModalAfterSecs = this.state.durationSpinInSeconds + 4 * 1000;
            setTimeout(() => {
                this.setState({showModal: true, spinning: false})
            }, showModalAfterSecs);
        } else {
            this.setState({showModal: false})
        }
    };

    updateState = (newState: {}) => {
        this.setState({...newState});
    };

    initializeNewMachine = (currentSeeds?: number[]) => {
        const newSeeds = currentSeeds ? this.getMachineRingSeeds(currentSeeds) :  [1, 5, 7];
        const newWinners = newSeeds.map((seed, i): MachineItem => this.props.shuffledItems[i][seed]);
        return {currentSeeds: newSeeds, winners: newWinners}
    };

    getSeed = () => {
        return Math.floor(Math.random() * (this.state.slotsPerReel));
    };

    getMachineRingSeeds = (currentSeeds: number[]): number[] => {
        let newSeeds = [];
        while (newSeeds.length < 3) {
            const newSeed = this.getSeed();
            if (currentSeeds.indexOf(newSeed) === -1) newSeeds.push(newSeed)
        }
        return newSeeds;
    };


    createMachineRing = (machineItemsList: Object[], seed: number, index: number) => {
        return (<MachineRing
            key={index}
            spinning={this.state.spinning}
            durationSpin={this.state.durationSpinInSeconds}
            ringNumber={index + 1}
            machineItemsList={machineItemsList}
            seed={seed}
            slotsPerReel={this.state.slotsPerReel}
        />)
    };

    render() {
        const machineRings = this.state.currentSeeds.map((seed: number, i:any): ReactElement => {
            return this.createMachineRing(this.props.shuffledItems[i], seed, i)
        });
        const winnerListItems = this.state.winners.map((winner: MachineItem) => (
            <Link to={'/'+ winner.name.eng}>
                <li className="list-item machine-winner-list-item">
                    <Icon machineItemName={winner.name.eng}/>
                </li>
            </Link>));

        return (
            <React.Fragment>
            <div className="machine">
                <MachineWindow spin={this.spin}>
                <div className="machine__rings">
                    <div id="stage">
                        <div id="rotate" >
                            {machineRings}
                        </div>
                    </div>
                </div>
                </MachineWindow>

                {this.state.showModal ? <Modal cta={"Spin Again"} clickCTA={this.toggleModal}>
                    <h1> Kies je groente: </h1>
                    <ul className="machine-winner-list"> {winnerListItems}</ul>
                    <h2> Kies een groente voor meer informatie & recepten </h2>
                </Modal> : ""}
            </div>
            </React.Fragment>

        );
    }
}

export default Machine;
