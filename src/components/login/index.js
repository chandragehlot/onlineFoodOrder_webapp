import React from "react";
import './login.scss';

const LoginComponent = () => {
  return (
    <div className="container">
      <div className="container__child signup__form">
        <form action="#">
          <div className="form-group">
            <label for="username">Username/Email</label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              placeholder="username / Email"
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="********"
              required
            />
          </div>
          <div className="">
            <div>
              <button className="button-A" type="submit" value="Login">
                Login
              </button>
            </div>
            <div>
              <p className="">Forget Password</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
