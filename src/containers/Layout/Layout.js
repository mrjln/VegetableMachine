import React from 'react';
import {Component} from "react";
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Navigation from "./Navigation/Navigation";
import './Layout.scss'


class Layout extends Component {
    render() {
        return (<React.Fragment>
            <div className="layout-container">
                <Header headerTitle={this.props.headerTitle}/>
                <div className="main"> {this.props.children} </div>
                <Footer/>
            </div>
            <Navigation navLinks={this.props.routerLinks.slice(0, 2)}/>
        </React.Fragment>
        )
    }
}

export default Layout