import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import HomeIcon from "./img/HomeIcon";
import TrendingIcon from "./img/TrendingIcon";
import SubscriptionsIcon from "./img/SubscriptionsIcon";
import LibraryIcon from "./img/LibraryIcon";
import HistoryIcon from "./img/HistoryIcon";
import WatchLaterIcon from "./img/WatchLaterIcon";
import FavouritesIcon from "./img/FavouritesIcon";
import LikedIcon from "./img/LikedIcon";
import Musicicon from "./img/Musicicon";
import GamingIcon from "./img/GamingIcon";
import ShowMoreIcon from "./img/ShowMoreIcon";

import Oval from "./img/Oval.png";

function Sidebar() {
  const style = {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alighItems: "center",
  };
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li>
          <Link style={style} to="/">
            <HomeIcon />
            <p className="base-icon home">Home</p>
          </Link>
        </li>
        <li>
          <TrendingIcon />
          <p className="base-icon">Trending</p>
        </li>
        <li>
          <SubscriptionsIcon />
          <p className="base-icon">Subscriptions</p>
        </li>
      </ul>
      <ul className="sidebar-nav-middle">
        <li>
          <LibraryIcon />
          <p className="base-icon">Library</p>
        </li>
        <li>
          <HistoryIcon />
          <p className="base-icon">History</p>
        </li>
        <li>
          <WatchLaterIcon />
          <p className="base-icon">Watch later</p>
        </li>
        <li>
          <FavouritesIcon />
          <p className="base-icon">Favourites</p>
        </li>
        <li>
          <LikedIcon />
          <p className="base-icon">Liked videos</p>
        </li>
        <li>
          <Musicicon />
          <p className="base-icon">Music</p>
        </li>
        <li>
          <GamingIcon />
          <p className="base-icon">Gaming</p>
        </li>
        <li>
          <ShowMoreIcon />
          <p className="base-icon">Show more</p>
        </li>
      </ul>
      <ul className="sidebar-nav-bottom">
        <li>
          <h3>Subscriptions</h3>
        </li>
        <li>
          <Link style={style} to="/channel">
            <img src={Oval} alt="Channel" />
            Gussie Singleton
          </Link>
        </li>
        <li>
          <Link style={style} to="/channel">
            <img src={Oval} alt="Channel" />
            Nora Francis
          </Link>
        </li>
        <li>
          <Link style={style} to="/channel">
            <img src={Oval} alt="Channel" />
            Belle Briggs
          </Link>
        </li>
        <li>
          <Link style={style} to="/channel">
            <img src={Oval} alt="Channel" />
            Eunice Cortez
          </Link>
        </li>
        <li>
          <Link style={style} to="/channel">
            <img src={Oval} alt="Channel" />
            Emma Hanson
          </Link>
        </li>
        <li>
          <Link style={style} to="/channel">
            <img src={Oval} alt="Channel" />
            Leah Berry
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
