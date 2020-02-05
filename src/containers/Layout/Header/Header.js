import React from 'react';
import {Component} from "react";

class Header extends Component {
    render() {
        return <div className="header">
            <h1 className="header__title"> {this.props.headerTitle} </h1>
        </div>
    }
}

export default Header