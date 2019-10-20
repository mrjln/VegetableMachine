import React, { Component } from 'react'
import './Machine.css'
import Window from '../../components/MachineWindow/MachineWindow';

class Machine extends Component {
    render() {
        const vegetables = [
            {
                id: 1,
                name: 'artichoke'
            },
            {
                id: 2,
                name: 'aubergine'
            },
            {
                id: 3,
                name: 'asparagus'
            },
            {
                id: 4,
                name: 'alfalfa '
            },
            {
                id: 5,
                name: 'azuki beans '
            },
        ]
        const listVegetables = vegetables.map(vegetable => {
            return <li><Window/></li>
        });
        return  <ul>{listVegetables}</ul>    
    }
    
}

export default Machine