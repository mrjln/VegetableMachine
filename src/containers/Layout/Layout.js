import React from 'react';
import {Component} from "react";
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

class Layout extends Component {
    render() {
        return <div>
            <Header headerTitle={this.props.headerTitle} />
            {this.props.children}
            <Footer/>
        </div>
    }
}

export default Layout