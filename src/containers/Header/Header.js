import React from 'react';
import {Component} from "react";

class Header extends Component {
    render() {
        return <div>
            <h1> {this.props.headerTitle} </h1>
        </div>
    }
}

export default Header