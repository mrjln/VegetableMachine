import React from 'react';
import MachineContainer from './components/MachineContainer/MachineContainer'
import Layout from './containers/Layout/Layout'
import './styles/common.scss'
import VegetableList from "./assets/vegetables";
import MachineItemDetailPage from './components/MachineItemDetailPage/MachineItemDetailPage'
import Footer from './containers/Layout/Footer/Footer';


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
        components: <MachineContainer />
    },
    {
        name: "About",
        path: "/about",
        components:  <Footer/>
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
