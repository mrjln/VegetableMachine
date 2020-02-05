import React from 'react';
import Machine from './components/Machine/Machine'
import Layout from './containers/Layout/Layout'
import Navigation from "./containers/Navigation/Navigation";

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
                <Navigation navLinks={routerLinks}/>
                <Switch>
                    <Route exact path="/">
                        <Layout headerTitle={"Vegetable Machine"}>
                            <Machine/>
                        </Layout>
                    </Route>
                    <Route path="/about">
                        <Layout headerTitle={"About thaaaat"}>
                            <h1> About bladiebla</h1>
                        </Layout>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
