import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "../../img/HomeIcon";
import Logo from "../../img/Logo";
import Videoicon from "../../img/Videoicon";
import MoreIcon from "../../img/MoreIcon";
import BellIcon from "../../img/BellIcon";
import Userpic from "../../img/Userpic.png";

function header() {
  return (
    <div>
      <ul className="nav-left">
        <li className="home-icon">
          <HomeIcon />
        </li>
        <li className="logo-icon">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <input className="search-input" type="search" placeholder="Search" />
        </li>
        <ul className="nav-right">
          <li>
            <Videoicon />
          </li>
          <li>
            <MoreIcon />
          </li>
          <li>
            <BellIcon />
          </li>
          <li>
            <Link to="/channel">
              <img src={Userpic} alt="User" />
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default header;
