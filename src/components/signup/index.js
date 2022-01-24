import React from "react";
import'./signup.scss';

const SignUpComponent = () => {
  return (
    <div className="container">
      <div className="container__child signup__form">
        <form action="#">
          <div className="form-group">
            <label for="username">Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              placeholder="james.bond"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="james.bond@spectre.com"
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
          <div className="form-group">
            <label for="passwordRepeat">Repeat Password</label>
            <input
              className="form-control"
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              placeholder="********"
              required
            />
          </div>
          <div className="">
            <div>
              <button className="button-A" type="submit" value="Register">
                Register
              </button>
            </div>
            <div>
              <p className="">I am already a member</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;
