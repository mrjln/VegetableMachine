import React from 'react';
import Machine from './components/Machine/Machine'
import Layout from './containers/Layout/Layout'
import './styles/common.scss'
import VegetableList from "./assets/vegetables";
import MachineItemDetailPage from './components/MachineItemDetailPage/MachineItemDetailPage'


import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

const productLinks = VegetableList.map(item => {
    return { name: item.name.eng, path: "/" + item.name.eng.toLowerCase(), components: <MachineItemDetailPage machineItem={item}/>   }
});

const routerLinks = [
    {
        name: "Home",
        path: "/",
        components: <Machine />
    },
    {
        name: "About",
        path: "/about",
        components: <h1> "blablabla" </h1>
    },
    ...productLinks
];
function App() {

    return (
        <Router>
            <div>
                <Switch>
                    {routerLinks.map(routerLink => (
                        <Route key={routerLink.name} exact path={routerLink.path}>
                            <Layout routerLinks={routerLinks} headerTitle={"Vegetable Machine"}>
                                {routerLink.components}
                            </Layout>
                        </Route>
                    ))}

                </Switch>
            </div>
        </Router>
    );
}

export default App;
