import React, {Component} from "react";
import Machine from '../Machine/Machine'
import {shuffleArray} from "../../utils/shuffle-array";
import VegetableList from "../../assets/vegetables";


class MachineContainer extends Component {

    getRandomListOfItems = (itemList) => {
        return (shuffleArray([...itemList]));
    };

    render(){
        const randomItemLists = [1,2,3].map(() => {
            return this.getRandomListOfItems(VegetableList);
        });
        return <Machine shuffledItems={randomItemLists}/>
    }
}

export default MachineContainer