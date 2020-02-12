import React from 'react';

function Header(props) {
    return <div className="header">
        <h1 className="header__title"> {props.headerTitle} </h1>
    </div>
}

export default Header