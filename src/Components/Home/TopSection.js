import React from "react";
import { Link } from "react-router-dom";

import Oval from "./img/Oval.png";
import "../Home/TopSection.css";
import LeftArrow from "./img/LeftArrow";
import RightArrow from "./img/RightArrow";
import TopSectionVideo from "./TopSectionVideo";

function TopSection() {
  const style = {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alighItems: "center",
  };
  return (
    <div className="topsection-wrapper">
      <div className="topsection">
        <Link style={style} to="/channel">
          <img src={Oval} width="50" height="50" alt="Profile" />
          <h3>Dollie Blair</h3>
        </Link>
        <div className="arrow-position">
          <span className="left-arrow">
            <LeftArrow />
          </span>
          <span>
            <RightArrow />
          </span>
        </div>
      </div>
      <TopSectionVideo />
    </div>
  );
}

export default TopSection;
