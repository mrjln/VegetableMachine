import React from 'react';
import {Component} from "react";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import './Layout.scss'


class Layout extends Component {
    render() {
        return (<React.Fragment>
            <div className="layout-container">
                <Header headerTitle="Vegetable Machine"/>
                <div className="main"> {this.props.children} </div>
                <Footer/>
            </div>
                {/*<Navigation navLinks={this.props.routerLinks.slice(0, 2)}/>*/}
            </React.Fragment>
        )
    }
}

export default Layout