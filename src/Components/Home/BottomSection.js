import React from "react";
import { Link } from "react-router-dom";

import "../Home/BottomSection.css";
import LeftArrow from "./img/LeftArrow";
import RightArrow from "./img/RightArrow";
import Oval from "./img/Oval.png";
import BottomSectionVideo from "./BottomSectionVideo";

function BottomSection() {
  const style = {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alighItems: "center",
  };
  return (
    <div>
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
      <BottomSectionVideo />
    </div>
  );
}

export default BottomSection;
