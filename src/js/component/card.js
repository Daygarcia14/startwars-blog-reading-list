import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ uid, _id, character }) => {
  const { store, actions } = useContext(Context);
  const {gender, hair_color, eye_color, name} = character;
  console.log(character)
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
            Gender: {gender}
            <br />
            Hair-Color: {hair_color}
            <br />
            Eye Color: {eye_color}
          </p>
          <div className="d-flex justify-content-between">
            <Link to={`/people/${uid}`} className="btn btn-outline-primary">
              Learn more!
            </Link>
            <button
              onClick={() => actions.addFav(_id)}
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
