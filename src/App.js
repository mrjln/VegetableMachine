import React from 'react';
import MachineContainer from './components/MachineContainer/MachineContainer'
import Layout from './containers/Layout/Layout'
import './styles/common.scss'
import VegetableList from "./assets/vegetables";
import MachineItemDetailPage from './components/MachineItemDetailPage/MachineItemDetailPage'
import HeroContentBlock from './components/HeroContentBlock/HeroContentBlock'
import Catalog from './components/Catalog/Catalog'

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

const productLinks = VegetableList.map(item => {
    return { name: item.name.eng, path: "/" + item.slug, components: <MachineItemDetailPage machineItem={item}/>   }
});

const routerLinks = [
    {
        name: "Home",
        path: "/",
        components: <MachineContainer />
    },
    {
        name: "About",
        path: "/about",
        components: <HeroContentBlock text={"The Vegetable Machine is designed to promote the amazing qualities of vegetables. It stimulates your curiosity and get to know all the healthy aspects of vegetables as the center of your meal. Vegetables have very versatile health benefits, which are not yet know to everyone. Vegetable Machine offers a fun way to get inspiration for your dinner. Hungry? Out of inspiration? Spin the wheel! "} img={<img src={require('./assets/images/NN_LOGO.jpg')}/>}/>
    },
    {
        name: "Catalog",
        path: "/catalog",
        components: <Catalog/>
    },
    ...productLinks
];
function App() {

    return (
        <Router>
                <Switch>
                    {routerLinks.map(routerLink => (
                        <Route key={routerLink.name} exact path={routerLink.path}>
                            <Layout routerLinks={routerLinks} headerTitle={routerLink.pageTitle}>
                                {routerLink.components}
                            </Layout>
                        </Route>
                    ))}

                </Switch>
        </Router>
    );
}

export default App;
