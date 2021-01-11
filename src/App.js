import React from "react";
import MachineContainer from "./components/MachineContainer/MachineContainer";
import Layout from "./containers/Layout/Layout";
import "./styles/common.scss";
import { slugifyString } from "./utils/slugify-string";
import MachineItemDetailPage from "./components/MachineItemDetailPage/MachineItemDetailPage";
import HeroContentBlock from "./components/HeroContentBlock/HeroContentBlock";
import Catalog from "./components/Catalog/Catalog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(gql`
    query Vegetables {
      vegetables {
        id
        name_en
        name_nl
        description
        icon {
          url
          alternativeText
        }
        coverPhoto {
          url
          alternativeText
        }
        vegetable_features {
          name
          description
          icon {
            url
            alternativeText
          }
        }
      }
    }
  `);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);

  const productLinks = data.vegetables.map((item) => {
    return {
      name: item.name_en,
      path: "/" + slugifyString(item.name_en),
      components: <MachineItemDetailPage machineItem={item} />,
    };
  });

  const routerLinks = [
    {
      name: "Home",
      path: "/",
      components: <MachineContainer machineItems={data.vegetables} />,
    },
    {
      name: "About",
      path: "/about",
      components: (
        <HeroContentBlock
          text={
            "The Vegetable Machine is designed to promote the amazing qualities of vegetables. It stimulates your curiosity to dive into the world of the healthy aspects of vegetables as the center of your meal. Vegetables have very versatile health benefits, which are not yet know to everyone. Vegetable Machine offers a fun way to get inspiration for your vegetable-centered dinner. Hungry? Out of inspiration? Spin the wheel! "
          }
          img={<img alt="logo" src={require("./assets/images/NN_LOGO.jpg")} />}
        />
      ),
    },
    {
      name: "Catalog",
      path: "/catalog",
      components: <Catalog catalogItems={data.vegetables} />,
    },
    ...productLinks,
  ];

  return (
    <Router>
      <Switch>
        {routerLinks.map((routerLink) => (
          <Route key={routerLink.name} exact path={routerLink.path}>
            <Layout
              routerLinks={routerLinks}
              headerTitle={routerLink.pageTitle}
            >
              {routerLink.components}
            </Layout>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
