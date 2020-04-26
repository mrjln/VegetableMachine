import React from 'react';

function Header(props) {
    return <React.Fragment>


        <div className="header">
            {props.headerTitle ?
                <div>
                    <div className="header__wave" style={{height: 150, overflow: 'hidden'}}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                            <path
                                d="M-3.94,96.20 C171.56,228.45 326.18,-20.22 500.00,126.80 L508.46,-7.39 L-9.02,-15.28 Z"
                                style={{stroke: 'none', fill: '#D0F0C0'}}>
                            </path>
                        </svg>
                    </div>
                    <h1 className="header__title"> {props.headerTitle} </h1>
                </div>
                :
                <div className="header__elipse">
                    <svg width="100%" height="246" viewBox="0 0 375 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="327.5" cy="-158.5" r="404.5" fill="#D0F0C0"/>
                    </svg>
                </div>
            }
        </div>


    </React.Fragment>

}

export default Header