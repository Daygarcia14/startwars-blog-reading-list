import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card }  from "../component/card";
import { CardPlanets }  from "../component/cardplanets";
import { CardVehicles } from "../component/cardvehicles";
import  "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {

  const {store} = useContext(Context);  
  

return(
    <>
    <div className="container mb-4">
    <h1>Charathers</h1>
        <div className="scroll ">
        <div className="row flex-nowrap">
				{store.people.map((character) => (
					<Card key= {`people${character.uid}`} {...character} />
				))}
			</div>
        </div>
	</div>
    
    <div className="container mb-4">
    <h1>Planets</h1>
    <div className="scroll ">
			<div className="row flex-nowrap">
				{store.planets.map((planet) => (
					<CardPlanets key={`planets${planet.uid}`} {...planet} />
				))}
			</div>
            </div>
	</div>

    <div className="container mb-4">
    <h1>Vehicles</h1>
    <div className="scroll ">
			<div className="row flex-nowrap">
				{store.vehicles.map((vehicle) => (
					<CardVehicles key={`vehicles${vehicle.uid}`} {...vehicle} />
				))}
			</div>
            </div>
	</div>
    </>
);
};
