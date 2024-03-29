import React from 'react';
import {
    Link,
} from "react-router-dom";
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

function Header(props) {
    return   <React.Fragment>
        <div className={"header header__wave"}>
            <div className="header__title">
                <Link to='/'>
                    <h1> {props.headerTitle} </h1>
                    <p> Veggies as the center of your meal </p>
                </Link>
            </div>
            <div className="header__nav">
                <HamburgerMenu/>
            </div>
        </div>
    </React.Fragment>

}

export default Header