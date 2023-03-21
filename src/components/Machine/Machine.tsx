import React, { Component, ReactElement } from "react";
import "./Machine.scss";
import MachineRing from "../../components/MachineRing/MachineRing";
import MachineWindow from "../../components/MachineWindow/MachineWindow";
import Modal from "../../containers/Modal/Modal";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import VMtypes from "../../utils/types/types";
import { capitalize } from "../../utils/capitalize";
import { slugifyString } from "../../utils/slugify-string";
import Confetti from "react-confetti";
import FeatureIconsMap from "../../icons/features/index";

interface MachineState {
  spinning: boolean;
  showModal: boolean;
  durationSpinInSeconds: number;
  slotsPerReel: number;
  amountOfReels: number;
  currentSeeds: number[];
  winner: VMtypes.MachineItemType;
}

interface MachineProps {
  shuffledItems: Array<VMtypes.MachineItemType[]>;
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
      amountOfReels: 3,
      ...initMachineState,
    };
    // https://codepen.io/werter25/pen/MxRJJV
  }

  spin = (): void => {
    this.setState({ spinning: true });
    const newMachineState = this.initNewMachineSpin(this.state.currentSeeds);
    this.setState({ ...newMachineState });
    this.toggleModal();
  };

  toggleModal = (): void => {
    if (!this.state.showModal) {
      const showModalAfterSecs = this.state.durationSpinInSeconds + 4 * 1000;
      setTimeout(() => {
        this.setState({ showModal: true, spinning: false });
      }, showModalAfterSecs);
    } else {
      this.setState({ showModal: false });
    }
  };

  initNewMachineSpin = (currentSeeds?: number[]) => {
    const newSeeds = currentSeeds
      ? this.getMachineRingSeeds(currentSeeds)
      : [5, 5, 5];
    const newWinner = this.props.shuffledItems[0][newSeeds[0]];
    return { currentSeeds: newSeeds, winner: newWinner };
  };

  getSeed = () => {
    return Math.floor(Math.random() * (this.state.slotsPerReel - 1));
  };

  getMachineRingSeeds = (currentSeeds: number[]): number[] => {
    const newSeed = this.getSeed();
    return currentSeeds.map((_, i) => {
      const multiplier = this.state.slotsPerReel / this.state.amountOfReels;
      const nextSeed = newSeed + i * multiplier;
      if (nextSeed > this.state.slotsPerReel - 1) {
        return nextSeed - this.state.slotsPerReel;
      }
      return nextSeed;
    });
  };

  createMachineRing = (
    machineItemsList: VMtypes.MachineItemType[],
    seed: number,
    index: number
  ) => {
    return (
      <MachineRing
        key={index}
        spinning={this.state.spinning}
        durationSpin={this.state.durationSpinInSeconds}
        ringNumber={index + 1}
        machineItems={machineItemsList}
        seed={seed}
        slotsPerReel={this.state.slotsPerReel}
      />
    );
  };

  render() {
    const machineRings = this.state.currentSeeds.map(
      (seed: number, i: any): ReactElement => {
        return this.createMachineRing(this.props.shuffledItems[i], seed, i);
      }
    );

    const winner = this.state.winner;
    const soloWinner = (
      <div className="list-item machine-winner__icon">
        <Icon icon={winner.icon} />
      </div>
    );
    return (
      <React.Fragment>
        <div className="machine">
          <MachineWindow spin={this.spin}>
            <div className="machine__rings">
              <div id="stage">
                <div id="rotate">{machineRings}</div>
              </div>
            </div>
          </MachineWindow>

          {this.state.showModal ? (
            <Modal cta={"Spin again"} clickCTA={this.toggleModal}>
              <h1 className="machine-winner__heading">
                {" "}
                {capitalize(winner.name_en)}{" "}
              </h1>
              <div className="machine-winner"> {soloWinner}</div>
              <div className="machine-winner__specs-list">
                <ul>
                  {winner.specs
                    ?.slice(0, 2)
                    .map((spec: VMtypes.VegetableFeatureType) => (
                      <li
                        className="machine-winner__specs-list-item"
                        key={spec.name}
                      >
                        <span style={{ width: "42px" }}>
                          {FeatureIconsMap(spec.icon)}
                        </span>
                        <span>{spec.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
              <Link
                className="machine-winner__link"
                to={"/" + slugifyString(winner.name_en)}
              >
                <button className="button button--primary machine-winner__button">
                  <span> More specs & recipes </span>
                  <svg
                    id="arrow-right-icon"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928932C12.9526 0.538408 12.3195 0.538408 11.9289 0.928932C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM0 9H19V7H0V9Z"
                      fill="#7C9073"
                    />
                  </svg>
                </button>
              </Link>
              <Confetti width={500} height={500} recycle={false} />
            </Modal>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Machine;
