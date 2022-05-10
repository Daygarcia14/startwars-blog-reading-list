import React, { useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";

const Details = () => {
  const { store } = useContext(Context);
  const { people, planets } = store;
  let params = useParams();
  let { id, nature } = params;

  return (
    <>
      {nature == "character" ? (
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
                <h1>{people[id - 1]?.name}</h1>
                <p>
                  Elit pariatur duis deserunt aute nisi aute anim aute cillum
                  amet deserunt labore et. Veniam proident sint mollit
                  adipisicing tempor amet. Exercitation excepteur tempor ipsum
                  dolor enim id culpa nulla ex aliqua anim. Ut proident ullamco
                  aliquip amet ad. Laboris eu minim proident sit esse in elit
                  nostrud. Tempor ea qui excepteur proident ea ad eiusmod non
                  officia.
                </p>
              </div>
            </div>
            <div className="container text-danger ">
              <hr className="bg-danger border-2 border-top border-danger" />
              <div className="container d-flex justify-content-center fw-bold">
                <div className="row">
                  <span>Name</span>
                  <span>{people[id - 1]?.name}</span>
                </div>
                <div className="row">
                  <span>Gender</span>
                  <span>{people[id - 1]?.gender}</span>
                </div>
                <div className="row">
                  <span>Hair Color</span>
                  <span>{people[id - 1]?.hair_color}</span>
                </div>
                <div className="row">
                  <span>Eye Color</span>
                  <span>{people[id - 1]?.eye_color}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : nature == "planet" ? (
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
                <h1>{planets[id - 1]?.name}</h1>
                <p>
                  Elit pariatur duis deserunt aute nisi aute anim aute cillum
                  amet deserunt labore et. Veniam proident sint mollit
                  adipisicing tempor amet. Exercitation excepteur tempor ipsum
                  dolor enim id culpa nulla ex aliqua anim. Ut proident ullamco
                  aliquip amet ad. Laboris eu minim proident sit esse in elit
                  nostrud. Tempor ea qui excepteur proident ea ad eiusmod non
                  officia.
                </p>
              </div>
            </div>
            <div className="container text-danger ">
              <hr className="bg-danger border-2 border-top border-danger" />
              <div className="container d-flex justify-content-center fw-bold">
                <div className="row">
                  <span>Name</span>
                  <span>{planets[id - 1]?.name}</span>
                </div>
                <div className="row">
                  <span>Climate</span>
                  <span>{planets[id - 1]?.climate}</span>
                </div>
                <div className="row">
                  <span>Population</span>
                  <span>{planets[id - 1]?.population}</span>
                </div>
                <div className="row">
                  <span>Terrain</span>
                  <span>{planets[id - 1]?.terrain}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Details;
