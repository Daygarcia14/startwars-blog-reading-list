import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const Login = () => {
  const { actions } = useContext(Context);

  const [register, setRegister] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="form-group row col-md-4">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email"
              name="email"
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
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="password"
              name="password"
              onChange={(event) =>
                setRegister({
                  ...register,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">

            <button
              type="buttom"
              className="btn btn-secondary"
              onClick={() => actions.login(register)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
