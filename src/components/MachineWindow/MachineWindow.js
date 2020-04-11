import React from 'react';
import "./MachineWindow.scss";

function MachineWindow(props) {

    const machineWidth = 300;
    const amountOfLightsBottom = Math.round(machineWidth / 30);
    const machineLigths = [];
    for(let i = 0; i < amountOfLightsBottom; i++){

        let style = {left: 25 + i * 30}
        machineLigths.push(<div style={style} className="machinewindow__light-bulb"></div>)
    }
    console.log(machineLigths);


    return <React.Fragment>
        <div className="machinewindow">
            {machineLigths}
            <div className="machinewindow__button">
                <button className="button button--primary" onClick={props.spin}>Spin</button>
            </div>
        </div>
        {props.children}

    </React.Fragment>
}

export default MachineWindow