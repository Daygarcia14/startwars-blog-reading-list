import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Register = () => {
  const { store, actions } = useContext(Context);
  const [register, setRegister] = useState({
    email: "",
    password: "",
  });
  console.log(register);

  return (
    <>
      <div className="container">
        <div className="form-group row col-md-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="email"
              onChange={(event) =>
                setRegister({
                  ...register,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="password"
              onChange={(event) =>
                setRegister({
                  ...register,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
          <Link to="/" style={{color:"white"}}>
          <button
              type="buttom"
              className="btn btn-secondary"
              onClick={() => actions.handle_register(register)}
            >
              Sign up
            </button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
