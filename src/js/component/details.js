import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { object } from "prop-types";

export const Details = () => {
  let params = useParams();
  let { store } = useContext(Context);
  let { people, planets, vehicles } = store;
  const [detail, setDetail] = useState({});
  const { nature, id } = params;

  const getId = () => {
    const detalle = store[nature].find((item) => item.uid == id);
    if (detalle) {
      setDetail(detalle);
    }
  };

  useEffect(() => {
    getId();
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-flex">
          <div className="col-12 col-md-6 col-lg-5 mb-4">
            <img
              src="https://picsum.photos/800/600"
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="p-3 text-center">
            <h1>{detail.properties?.name}</h1>
            <p>
              Elit pariatur duis deserunt aute nisi aute anim aute cillum amet
              deserunt labore et. Veniam proident sint mollit adipisicing tempor
              amet. Exercitation excepteur tempor ipsum dolor enim id culpa
              nulla ex aliqua anim. Ut proident ullamco aliquip amet ad. Laboris
              eu minim proident sit esse in elit nostrud. Tempor ea qui
              excepteur proident ea ad eiusmod non officia.
            </p>
          </div>
        </div>
        <div></div>

        <div className="container text-danger ">
          <hr className="bg-danger border-2 border-top border-danger" />
          {nature == "people" ? (
            <div className="container d-flex justify-content-center fw-bold">
              <div className="row">
                <span>Name</span>
                <span>{detail.properties?.name}</span>
              </div>
              <div className="row">
                <span>Birth Year</span>
                <span>{detail.properties?.birth_year}</span>
              </div>
              <div className="row">
                <span>Gender</span>
                <span>{detail.properties?.gender}</span>
              </div>
              <div className="row">
                <span>Height</span>
                <span>{detail.properties?.height}</span>
              </div>
              <div className="row">
                <span>Skin Color</span>
                <span>{detail.properties?.skin_color}</span>
              </div>
              <div className="row">
                <span>Eye Color</span>
                <span>{detail.properties?.eye_color}</span>
              </div>
            </div>
          ) : nature == "planets" ? (
            <div className="container d-flex justify-content-center fw-bold">
              <div className="row">
                <span>Name</span>
                <span>{detail.properties?.name}</span>
              </div>
              <div className="row">
                <span>Climate</span>
                <span>{detail.properties?.climate}</span>
              </div>
              <div className="row">
                <span>Population</span>
                <span>{detail.properties?.population}</span>
              </div>
              <div className="row">
                <span>Orbital Period</span>
                <span>{detail.properties?.orbital_period}</span>
              </div>
              <div className="row">
                <span>Rotation Period</span>
                <span>{detail.properties?.rotation_period}</span>
              </div>
              <div className="row">
                <span>Diameter</span>
                <span>{detail.properties?.diameter}</span>
              </div>
            </div>
          ) : nature == "vehicles" ? (
            <div className="container d-flex justify-content-center fw-bold">
              <div className="row">
                <span>Name</span>
                <span>{detail.properties?.name}</span>
              </div>
              <div className="row">
                <span>Model</span>
                <span>{detail.properties?.model}</span>
              </div>
              <div className="row">
                <span>Vehicle Class</span>
                <span>{detail.properties?.vehicle_class}</span>
              </div>
              <div className="row">
                <span>Passengers</span>
                <span>{detail.properties?.passengers}</span>
              </div>
              <div className="row">
                <span>Crew</span>
                <span>{detail.properties?.crew}</span>
              </div>
              <div className="row">
                <span>Cargo Capacity</span>
                <span>{detail.properties?.cargo_capacity}</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
