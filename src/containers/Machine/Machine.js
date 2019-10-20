import React, { Component } from 'react'
import './Machine.css'
import MachineWindow from '../../components/MachineWindow/MachineWindow';
import VegetableList from '../../assets/vegetables'

class Machine extends Component {
    render() {
        const vegetables = VegetableList
        const listVegetables = vegetables.map(vegetable => {
            return <li><MachineWindow vegetable={vegetable}/></li>
        });
        return  <div class="machine"><ul class="machine-windows">{listVegetables}</ul> </div>   
    }
    
}

export default Machine