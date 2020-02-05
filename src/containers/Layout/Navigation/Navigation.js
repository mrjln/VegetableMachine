import React from 'react';
import {Component} from "react";
import {
    Link,
} from "react-router-dom";

class Navigation extends Component {
    render() {
        const navLinks = this.props.navLinks.map(navLink => {
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
}

export default Navigation