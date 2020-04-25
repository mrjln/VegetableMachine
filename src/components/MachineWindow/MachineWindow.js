import React from 'react';
import "./MachineWindow.scss";
import { ReactComponent as Elipse } from './Elipse.svg';
import { svgPathProperties } from "svg-path-properties";


function MachineWindow(props) {

    const machineWidth = 300;
    const distanceBetweenLights = 20;
    const amountOfLightsBottom = Math.round(machineWidth / distanceBetweenLights);
    const amountOfLightsBow = Math.round(((machineWidth * Math.PI) / 2) / distanceBetweenLights);
    // console.log(amountOfLightsBow, amountOfLightsBottom);
    const machineLightsRow = [];
    const machineLightsBow = [];
    let blinkerNumber = 0;
    for(let i = 0; i < amountOfLightsBottom; i++) {
        blinkerNumber = blinkerNumber > 5 ? 0 : blinkerNumber;
        let styleRow = {left: 25 + i * distanceBetweenLights};
        let styleBow = {left: 25 + i * 10, top: -30 - i * 20};
        machineLightsRow.push(<div style={styleRow} className={'machine-window__light-bulb blinker-'+blinkerNumber}></div>)
        machineLightsBow.push(<div style={styleBow} className={'machine-window__light-bulb blinker-'+blinkerNumber}></div>)

        blinkerNumber++
    }

    const properties = new svgPathProperties("M298,101C297.325, 53.126, 233.796, 0, 149, 0C64.2043, 0, 0.742637, 53.126, 0, 101H298Z");
    const length = properties.getTotalLength(); // 690.7935791015625
    const point = properties.getPointAtLength(200);
    const circle = <circle className={"machine-window__light-bulb blinker-1"} cx={point.x} cy={point.y} r="5" ></circle>


    return <React.Fragment>
        <div className="machine-window">
            <svg id="elipse" width="298" height="120" viewBox="0 0 298 101" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path id="curve" d="M298 101C297.325 53.126 233.796 0 149 0C64.2043 0 0.742637 53.126 0 101H298Z"
                      fill="#292F26"/>
                {circle}
            </svg>
            {/*{machineLightsBow}*/}
            {machineLightsRow}
            <div className="machine-window__button">
                <button className="button button--primary" onClick={props.spin}>Spin</button>
            </div>
        </div>
        {props.children}

    </React.Fragment>
}

export default MachineWindow