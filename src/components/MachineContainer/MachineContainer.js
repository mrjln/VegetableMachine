import React, {Component} from "react";
import Machine from '../Machine/Machine'
import {shuffleArray} from "../../utils/shuffle-array";
import VegetableList from "../../assets/vegetables";


class MachineContainer extends Component {


    getRandomListOfItems = (itemList) => {
        return (shuffleArray([...itemList]));
    };

    getArrayAfterPolonaise = (initialList, amountOfSteps) => {
        return initialList.map((item, index) => {
            let selector = index + (initialList.length - amountOfSteps); // 4,5,6,7,8,9,10,11
            if (selector >= (initialList.length)){ // 0,1,2,3
                return initialList[selector - (initialList.length)]
            }
            return initialList[selector]
        })
    };

    getShuffledLists = () => {
        const amountOfSlots = 12;
        const amountOfReels = 3;
        const initialList = this.getRandomListOfItems(VegetableList);
        const denominator = amountOfSlots / amountOfReels;
        const list2 = this.getArrayAfterPolonaise(initialList, denominator);
        const list3 = this.getArrayAfterPolonaise(initialList, denominator * 2);
        console.log("1", initialList, "2", list2, "3", list3);
        return [initialList, list2, list3]
    };

    render(){
        return <Machine shuffledItems={this.getShuffledLists()}/>
    }
}

export default MachineContainer