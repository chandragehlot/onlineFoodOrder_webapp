import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="appHeader__cont">
        <div className="appHeader__logoCont">
          <div className="appHeader__logo">
          <Link to="/">
            <span className="appHeader__logo_main">Khana</span>
            <span className="appHeader__logo_sub">Khajana</span>
          </Link>
          </div>
        </div>
        <nav className="appHeader__profileCont">
          <div className="appHeader__help">
            <Link to="/offers">Offers</Link>
          </div>
          <div className="appHeader__help">
            <Link to="/stores">Store finder</Link>
          </div>
          <div className="appHeader__help">
            <Link to="/">corporate enquire</Link>
          </div>
        </nav>
        <nav className="appHeader__profileCont">
          <div className="appHeader__help">
            <Link to="/help">Help</Link>
          </div>
          <div className="appHeader__help">
            <Link to="/contact">contact us</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
