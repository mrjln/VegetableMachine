import React from 'react';
import {
    Link,
} from "react-router-dom";


function Navigation(props) {
    const navLinks = props.navLinks.map(navLink => {
        return <li key={navLink.name} className="navigation-list__item">
            <Link to={navLink.path}>
                <button className="button button--primary navigation__button"> {navLink.name}</button>
            </Link>
        </li>
    });
    return <div className="navigation">
        <ul className="navigation-list">
            {navLinks}
        </ul>
        <hr/>

    </div>
}

export default Navigation