import React from 'react';

function Header(props) {
    return <React.Fragment>
        <div className="header">
        <div  style={{height: 150, overflow: 'hidden'}} >
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                <path d="M-3.94,96.20 C171.56,228.45 326.18,-20.22 500.00,126.80 L508.46,-7.39 L-9.02,-15.28 Z" style={{stroke: 'none', fill: '#D0F0C0'}}>

                </path>
            </svg>
        </div>
            <h1 className="header__title"> {props.headerTitle} </h1>
        </div>
    </React.Fragment>

}

export default Header