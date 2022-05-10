import React, { useContext } from "react";
import { Link } from "react-router-dom";
import  Card  from "../component/card";
import { CardPlanets } from "../component/cardplanets";
import { CardVehicles } from "../component/cardvehicles";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Login from "./login";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <>
      {store.token.length > 0 ? (
        <div>
          <div className="container mb-4">
            <h1>Characters</h1>
            <div className="scroll ">
              <div className="row flex-nowrap">
                {store.people.map((character) => (
                  <Card key={`people${character.id}`} character={character} nature='character' />
                ))}
              </div>
            </div>
          </div>
          <div className="container mb-4">
            <h1>Planets</h1>
            <div className="scroll ">
              <div className="row flex-nowrap">
                {store.planets.map((planet) => (
                  <CardPlanets key={`planets${planet.id}`} planet={planet} nature='planet' />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};
