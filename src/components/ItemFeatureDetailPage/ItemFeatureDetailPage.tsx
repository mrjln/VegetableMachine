
import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Icon from "../Icon/Icon";



const ItemFeatureDetailPage = () => {
    const { id } = useParams<{ id: string }>();

    const { loading, error, data } = useQuery(gql`
    query VegetableFeatures { 
        vegetableFeature(id:${id}) {
            name
            description
            icon {
                url
                alternativeText
            }
            ListOfResources
            vegetables {
                name_en
            }
        }
    }
  `);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);
    console.log(id)
    const feature = data.vegetableFeature
    return <div className="item-feature">
        <Icon icon={feature.icon}/>
        <h1> {feature.name} </h1>
        <p>{feature.description}</p>
        </div>
}

export default ItemFeatureDetailPage