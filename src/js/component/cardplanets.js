import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from 'prop-types';

export const CardPlanets = ({ planet, nature}) => {
  const { store, actions } = useContext(Context);
  const {terrain, population, name, id} = planet;
  return (
    <>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Population: {population}
            <br />
            Terrain: {terrain}
          </p>
          <div className="d-flex justify-content-between">
            <Link to={`/${nature}/${id}`} className="btn btn-outline-primary">
              Learn more!
            </Link>
            <button
              onClick={() => actions.addFav(id, name, nature)}
              className="btn btn-outline-warning"
            >
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
