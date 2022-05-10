import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/start-wars-logo.jpg";
import { Context } from "../store/appContext";
import deleteFav from "../store/flux";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-dark mb-3 px-5">
      <Link to="/">
        <img
          className="rounded-circle"
          src={starWarsLogo}
          style={{ width: "70px", height: "70px" }}
        />
      </Link>
      <div className="mx-4">
        {store.token.length > 0 ? (
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
              <span className="badge bg-secondary">
                {store.favorites.length}
              </span>
            </button>
            <ul
              className="dropdown-menu text-center"
              aria-labelledby="dropdownMenuButton1"
            >
              {store.favorites == "" && <li>(empty)</li>}
              {store.favorites.map((item) => {
                return (
                  <li
                    key={item.nature_id}
                    className="d-flex justify-content-between p-2"
                  >
                
                    <span>{(item.name)}</span>
                    <button
                      className="btn btn-outline-secondary ms-2"
                      type="button"
                      onClick={() => actions.deleteFav(item.nature, item.nature_id)}
                    >
                      <i className="far fa-trash-alt" />
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              className="btn btn-primary ms-2"
              type="button"
              onClick={() => actions.Logout()}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <button
              className="btn btn-secondary ms-2"
              type="button"
            >
            <Link to="/register" style={{color:"white"}}>Sign up</Link>
            </button>
            <button
              className="btn btn-secondary ms-2"
              type="button"
            >
            <Link to="/" style={{color:"white"}}>Login</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
