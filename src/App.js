import React from 'react';
import Machine from './components/Machine/Machine'
import Modal from './containers/Modal/Modal'
import Layout from './containers/Layout/Layout'
import './styles/common.scss'

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

const routerLinks = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About",
        link: "/about"
    },
];

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Layout routerLinks={routerLinks} headerTitle={"Vegetable Machine"}>
                            <Machine/>
                        </Layout>
                    </Route>
                    <Route path="/about">
                        <Layout routerLinks={routerLinks} headerTitle={"About thaaaat"}>
                            <p> tralalalalalalalal </p>
                        </Layout>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
