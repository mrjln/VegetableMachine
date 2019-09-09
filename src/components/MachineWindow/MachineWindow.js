import React, { Component } from 'react'
import './MachineWindow.css'

class MachineWindow extends Component {
    render() {

        return  <div className='window'>
                    <h1> Veggie </h1>
                </div>
    }
    
}

MachineWindow.propTypes = {
    vegetableName: PropTypes.string.isRequired
};

export default Window