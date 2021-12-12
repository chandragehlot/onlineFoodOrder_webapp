import React from "react";
import { Link } from "react-router-dom";
import applogo from '../../assets/khana-khazana.jpeg';

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="appHeader__cont">
        <div className="appHeader__logoCont">
          <div className="appHeader__logo">
          <Link to="/">
            <img src={applogo} alt="khana khajana" />
          </Link>
          </div>
        </div>
        <nav className="appHeader__section-cont">
          <div className="appHeader__items">
            <Link to="/offers">Offers</Link>
          </div>
          <div className="appHeader__items">
            <Link to="/stores">Store finder</Link>
          </div>
          <div className="appHeader__items">
            <Link to="/help">Help</Link>
          </div>
          <div className="appHeader__items">
            <Link to="/contact">contact us</Link>
          </div>
        </nav>
        <nav className="appHeader__section-cont">
          <div className="appHeader__items">
            <Link to="/help">SignUp</Link>
          </div>
          <div className="appHeader__items">
            <Link to="/contact">Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
