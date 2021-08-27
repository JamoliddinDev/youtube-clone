import React from "react";
import { Link } from "react-router-dom";

import Cover from "../Home/img/Cover.png";

function BottomSectionVideo() {
  const style = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <ul className="video-cover-wrapper">
        <li>
          <Link style={style} to="/video">
            <img src={Cover} alt="Source" />
            <h4>A Brief History Of Creation</h4>
          </Link>
        </li>
        <li>
          <Link style={style} to="/video">
            <img src={Cover} alt="Source" />
            <h4>Selecting The Right Hotel</h4>
          </Link>
        </li>
        <li>
          <Link style={style} to="/video">
            <img src={Cover} alt="Source" />
            <h4>Asteroids</h4>
          </Link>
        </li>
        <li>
          <Link style={style} to="/video">
            <img src={Cover} alt="Source" />
            <h4>A Brief History Of Creation</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BottomSectionVideo;
