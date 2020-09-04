import React from "react";
import "./HamburgerMenu.scss";
import {
    Link,
} from "react-router-dom";

function HamburgerMenu() {

    const toggleMenu = () => {
        const menu = document.getElementById('hamburger-menu')
        if(menu) menu.classList.toggle('open');
    };

    return <React.Fragment>
        <div onClick={() => toggleMenu()}>Open</div>

        <div className='hamburger-menu' id='hamburger-menu'>
            <div onClick={() => toggleMenu()}>Close</div>
            <ul className='hamburger-menu-list'>
                <Link to='/'>
                    <li className='hamburger-menu-list__item'><h3>Home </h3></li>
                </Link>
                <Link to='/'>
                    <li className='hamburger-menu-list__item'><h3> About</h3></li>
                </Link>
                <Link to='/'>
                    <li className='hamburger-menu-list__item'><h3> Catalog</h3></li>
                </Link>
            </ul>
        </div>
    </React.Fragment>

}

export default HamburgerMenu