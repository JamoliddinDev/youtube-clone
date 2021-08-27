import React from "react";
import { Link } from "react-router-dom";

import "../Home/MiddleSectionVideo.css";
import Cover2 from "../Home/img/Cover2.png";

function MiddleSectionVideo() {
  const style = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <ul className="video-cover-wrapper">
        <li>
          <Link style={style} to="/video">
            <img src={Cover2} alt="Source" />
            <h4>Dude You Re Getting A Telescope</h4>
          </Link>
        </li>
        <li>
          <Link style={style} to="/video">
            <img src={Cover2} alt="Source" />
            <h4>Moon Gazing</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MiddleSectionVideo;
