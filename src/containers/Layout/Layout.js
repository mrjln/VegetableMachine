import React from 'react';
import {Component} from "react";
import Footer from "../Footer/Footer"

class Layout extends Component {
    render() {
        return <div>
            {this.props.children}
            <Footer/>
        </div>
    }
}

export default Layout