import React from 'react';
import "./MachineWindow.scss";
import {svgPathProperties} from "svg-path-properties";


function MachineWindow(props) {

    const getMachineLights = () => {
        const amountOfLights = 21;
        const machineLights = [];
        const properties = new svgPathProperties("M298,101C297.325, 53.126, 233.796, 0, 149, 0C64.2043, 0, 0.742637, 53.126, 0, 101H298Z");
        const length = properties.getTotalLength();
        for (let i = 0; i < amountOfLights; i++) {
            const point = properties.getPointAtLength(i / amountOfLights * length);
            const circle =
                <circle key={i}
                        className={`blinker-${i}`}
                        cx={point.x}
                        cy={point.y}
                        r="5"
                >
                    <animate
                        attributeType="XML"
                        attributeName="fill"
                        values="FFCE54;#FFCE54;#f9de8a;#f9de8a"
                        dur="0.8s"
                        repeatCount="indefinite"
                    />

                </circle>;
            machineLights.push(circle)
        }
        return machineLights;
    };

    return <React.Fragment>
        <div className="machine-window">
            <svg id="inner-elipse" width="290" height="120" viewBox="-3 0 310 101" fill="#FFCE54"
                 xmlns="http://www.w3.org/2000/svg">
                <path id="curve" d="M298 101C297.325 53.126 233.796 0 149 0C64.2043 0 0.742637 53.126 0 101H298Z"
                      fill="#0f331f"/>
                {getMachineLights()}
            </svg>
            <div className="machine-window__button">
                <button className="button button--primary" onClick={props.spin}>Spin</button>
            </div>
        </div>
        {props.children}
    </React.Fragment>
}

export default MachineWindow