import React from "react";
import { Link } from "react-router-dom";
import applogo from "../../assets/freshbite.png";

import { MdOutlineLocalOffer } from "react-icons/md";
import { FaHandsHelping, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { AiOutlineContacts, AiOutlineFileSearch } from "react-icons/ai";

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
            <div className="pd-r-10">
              <MdOutlineLocalOffer />
            </div>
            <Link to="/offers">Offers</Link>
          </div>
          <div className="appHeader__items">
            <div className="pd-r-10">
              <AiOutlineFileSearch />
            </div>
            <Link to="/stores">Store finder</Link>
          </div>
          <div className="appHeader__items">
            <div className="pd-r-10">
              <FaHandsHelping />
            </div>
            <Link to="/help">Help</Link>
          </div>
          <div className="appHeader__items">
            <div className="pd-r-10">
              <AiOutlineContacts></AiOutlineContacts>
            </div>
            <Link to="/contact">contact us</Link>
          </div>
        </nav>
        <nav className="appHeader__section-cont">
          <div className="appHeader__items">
            <div className="pd-r-10">
              <FaUserPlus />
            </div>
            <Link to="/signup">SignUp</Link>
          </div>
          <div className="appHeader__items">
            <div className="pd-r-10">
              <FaSignInAlt></FaSignInAlt>
            </div>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
