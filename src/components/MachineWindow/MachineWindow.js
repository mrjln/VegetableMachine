import React from 'react';
import "./MachineWindow.scss";

function MachineWindow(props) {

    return <React.Fragment>
        <div className="machinewindow">
            <div className="machinewindow__button">
                <button className="button button--primary" onClick={props.spin}>Spin</button>
            </div>
        </div>
        {props.children}

    </React.Fragment>
}

export default MachineWindow