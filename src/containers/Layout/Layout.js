import React from 'react';
import {Component} from "react";
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Navigation from "./Navigation/Navigation";


class Layout extends Component {
    render() {
        return <div>
            <Header headerTitle={this.props.headerTitle} />
            <Navigation navLinks={this.props.routerLinks}/>

            {this.props.children}
            <Footer/>
        </div>
    }
}

export default Layout