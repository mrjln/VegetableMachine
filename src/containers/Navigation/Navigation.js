import React from 'react';
import {Component} from "react";
import {
    Link,
} from "react-router-dom";

class Navigation extends Component {
    render() {
        const navLinks = this.props.navLinks.map(navLink => {
            return <li><Link to={navLink.link}>{navLink.name}</Link></li>
        });

        return <div>
            <ul>
                {navLinks}

            </ul>

        </div>
    }
}

export default Navigation