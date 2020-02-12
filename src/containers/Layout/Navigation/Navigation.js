import React from 'react';
import {
    Link,
} from "react-router-dom";


function Navigation(props) {
    const navLinks = props.navLinks.map(navLink => {
        return <li className="navigation__item">
            <Link to={navLink.link}>
                <button className="button navigation__button"> {navLink.name}</button>
            </Link>
        </li>
    });
    return <div>
        <ul className="navigation">
            {navLinks}
        </ul>

    </div>
}

export default Navigation