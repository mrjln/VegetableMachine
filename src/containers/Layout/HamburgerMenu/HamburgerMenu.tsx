import React from "react";
import "./HamburgerMenu.scss";
import {
    Link,
} from "react-router-dom";
import Icon from "../../../components/Icon/Icon";


function HamburgerMenu() {

    const toggleMenu = () => {
        const menu = document.getElementById('hamburger-menu');
        const overlay = document.getElementById('overlay');
        if (menu && overlay) {
            menu.classList.toggle('_is-open');
            menu.classList.toggle('_is-closed');
            overlay.classList.toggle('_is-active');
        }
    };

    return <React.Fragment>
        <div className="hamburger-icon" onClick={() => toggleMenu()}><Icon icon='hamburgerIcon'/></div>

        <div className='hamburger-menu__overlay' id='overlay' onClick={() => toggleMenu()}></div>
        <div className='hamburger-menu' id='hamburger-menu'>
            <div className="hamburger-menu__close-icon" onClick={() => toggleMenu()}><Icon icon='crossIcon'/></div>
            <ul className='hamburger-menu-list'>
                <Link to='/'>
                    <li className='hamburger-menu-list__item'><h3>Home</h3></li>
                </Link>
                <Link to='/about'>
                    <li className='hamburger-menu-list__item'><h3>About</h3></li>
                </Link>
                <Link to='/catalog'>
                    <li className='hamburger-menu-list__item'><h3>Catalog</h3></li>
                </Link>
            </ul>
        </div>
    </React.Fragment>

}

export default HamburgerMenu