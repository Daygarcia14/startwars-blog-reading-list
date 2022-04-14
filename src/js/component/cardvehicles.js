import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehicles = ({ properties, uid, _id }) => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{properties.name}</h5>
          <p className="card-text">
            Model: {properties.model}
            <br />
            Vehicle class: {properties.vehicle_class}
          </p>
          <div className="d-flex justify-content-between">
            <Link to={`/vehicles/${uid}`} className="btn btn-outline-primary">
              Learn more!
            </Link>
            <button
              className="btn btn-outline-warning"
              onClick={() => actions.addFav(_id)}
            >
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
