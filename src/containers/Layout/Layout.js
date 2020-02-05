import React from 'react';
import {Component} from "react";
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Navigation from "./Navigation/Navigation";
import './Layout.scss'


class Layout extends Component {
    render() {
        return <div>
            <Header headerTitle={this.props.headerTitle}/>
            <hr/>
            <Navigation navLinks={this.props.routerLinks}/>
            {this.props.children}
            <Footer/>
        </div>
    }
}

export default Layout