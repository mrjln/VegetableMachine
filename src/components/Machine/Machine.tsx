import React, {Component, ReactElement} from "react";
import "./Machine.scss";
import MachineRing from "../../components/MachineRing/MachineRing";
import MachineWindow from "../../components/MachineWindow/MachineWindow";
import Modal from "../../containers/Modal/Modal";
import Icon from "../Icon/Icon";
import {
    Link,
} from "react-router-dom";
import MachineItem from "../../utils/types/types"

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
        const initMachineState = this.initNewMachineSpin();

        this.state = {
            spinning: false,
            showModal: false,
            durationSpinInSeconds: 2,
            slotsPerReel: 12,
            ...initMachineState
        };
        // https://codepen.io/werter25/pen/MxRJJV
    }

    spin = (): void => {
        this.setState({spinning: true});
        const newMachineState = this.initNewMachineSpin(this.state.currentSeeds);
        this.setState({...newMachineState});
        this.toggleModal()
    };

    toggleModal = (): void => {
        if (!this.state.showModal) {
            const showModalAfterSecs = this.state.durationSpinInSeconds + 4 * 1000;
            setTimeout(() => {
                this.setState({showModal: true, spinning: false})
            }, showModalAfterSecs);
        } else {
            this.setState({showModal: false})
        }
    };

    initNewMachineSpin = (currentSeeds?: number[]) => {
        const newSeeds = currentSeeds ? this.getMachineRingSeeds(currentSeeds) : [5, 5, 5];
        const newWinners = newSeeds.map((seed, i): MachineItem => this.props.shuffledItems[i][seed]);
        return {currentSeeds: newSeeds, winners: newWinners}
    };

    getSeed = () => {
        return Math.floor(Math.random() * (this.state.slotsPerReel / 3));
    };

    getMachineRingSeeds = (currentSeeds: number[]): number[] => {
        const newSeed = this.getSeed();
        return currentSeeds.map((seed, i) => newSeed + i * 4);
    };

    createMachineRing = (machineItemsList: MachineItem[], seed: number, index: number) => {
        return (<MachineRing
            key={index}
            spinning={this.state.spinning}
            durationSpin={this.state.durationSpinInSeconds}
            ringNumber={index + 1}
            machineItems={machineItemsList}
            seed={seed}
            slotsPerReel={this.state.slotsPerReel}
        />)
    };
    capitalize = (string: string):string => {
        if (typeof string !== 'string') return '';
        return string.charAt(0).toUpperCase() + string.slice(1)
    };

    render() {

        const machineRings = this.state.currentSeeds.map((seed: number, i: any): ReactElement => {
            return this.createMachineRing(this.props.shuffledItems[i], seed, i)
        });
        // const winnerListItems = this.state.winners.map((winner: MachineItem) => (
        //     <Link to={'/'+ winner.name.eng}>
        //         <li className="list-item machine-winner-list-item">
        //             <Icon machineItemName={winner.name.eng}/>
        //         </li>
        //     </Link>));

        const winner = this.state.winners[0];
        const soloWinner = (
            <li className="list-item machine-winner__icon">
                <Icon machineItemName={winner.name.eng}/>
            </li>
        );

        return (
            <React.Fragment>
                <div className="machine">
                    <MachineWindow spin={this.spin}>
                        <div className="machine__rings">
                            <div id="stage">
                                <div id="rotate">
                                    {machineRings}
                                </div>
                            </div>
                        </div>
                    </MachineWindow>

                    {this.state.showModal ? <Modal cta={"Spin Again"} clickCTA={this.toggleModal}>
                        <h1 className="machine-winner__heading"> {this.capitalize(winner.name.eng)} </h1>
                        <ul className="machine-winner"> {soloWinner}</ul>
                        <div className="machine-winner__specs-list">
                            <ul>
                                <li> Vitamin C</li>
                                <li> Vitamin B1 and B2</li>
                            </ul>
                            <ul>
                                <li> Lots of iron</li>
                                <li> Recovery of muscles</li>
                            </ul>
                        </div>
                        <Link to={'/' + winner.name.eng}>
                            <button className="button button--secondary"> Give me more specs

                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928932C12.9526 0.538408 12.3195 0.538408 11.9289 0.928932C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM0 9H19V7H0V9Z"
                                        fill="#7C9073"/>
                                </svg>
                            </button>
                        </Link>
                    </Modal> : ""}
                </div>
            </React.Fragment>

        );
    }
}

export default Machine;
