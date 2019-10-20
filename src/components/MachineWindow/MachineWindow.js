import React, { Component } from 'react'
import './MachineWindow.css'

class MachineWindow extends Component {
    render() {
        console.log(this.props)

        return  <div className='window'>
                    <h1> {this.props.vegetable.name} </h1>
                </div>
    }
    
}

export default MachineWindow