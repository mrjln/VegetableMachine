import React, {Component, ReactElement} from "react";
import Icon from "../Icon/Icon";
import "./MachineItemDetailPage.scss";
import NNLogo from '../../assets/images/NN_LOGO.jpg'
import {capitalize} from "../../utils/capitalize";
import NutritionTable from '../NutritionTable/NutritionTable'
import MachineItem from "../../utils/types/types"

interface MachineItemDetailProps {
    machineItem: MachineItem
}

class MachineItemDetailPage extends Component<MachineItemDetailProps> {

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('footer');
        const cta = document.getElementById('cta');
        if (wrappedElement && Math.round(wrappedElement.getBoundingClientRect().top) <= (window.innerHeight)) {
            if (cta) cta.classList.add('machine-item-detail__on-the-spot-cta');
        } else {
            if (cta) cta.classList.remove('machine-item-detail__on-the-spot-cta');
        }

    };

    render() {

        const machineItem = this.props.machineItem;

        return <div className="machine-item-detail">
            <div>
            <span className="machine-item-detail__icon" id='machine-item-icon'>
                <Icon machineItemName={machineItem.name.eng}/>
            </span>
            </div>
            <div className="machine-item-detail__description">
                <h1> {capitalize(machineItem.name.eng)} </h1>
                <p>{machineItem.description}</p>
            </div>
            {machineItem ?
                <div className="machine-item-detail__image">
                    <img alt="asparagus" src={require(`../../assets/images/${machineItem.slug}.jpg`)}/>
                </div> : ""}
            <div className="machine-item-detail__specs">
                <ul className="machine-item-detail__specs-list">
                    {machineItem.specs.map((item) => {
                        return <li>
                            <img width='50px' height='50px' alt={'NN logo'} src={NNLogo}/>
                            <div>
                                <h3> {item.title} </h3>
                                <p>{item.description} </p>
                                <span> source: <a href="/"> lees meer over Awesome feature 1 </a>
                                </span>
                            </div>
                        </li>
                    })
                    }
                </ul>
            </div>
            <NutritionTable/>
            <div className="machine-item-detail__sticky-cta" id='cta'>
                <a href={"https://www.ah.nl/allerhande/recepten-zoeken?Ntt=" + machineItem.name.nl}>
                    <button className="button button--primary button--leave-site">
                <span>
                    Zoek een recept met {machineItem.name.nl}
                </span>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928932C12.9526 0.538408 12.3195 0.538408 11.9289 0.928932C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM0 9H19V7H0V9Z"
                                fill="#7C9073"/>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    }
}

export default MachineItemDetailPage