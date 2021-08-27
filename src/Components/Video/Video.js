import React from "react";
import { Link } from "react-router-dom";

import Header from "../Home/Header";
import Cover from "../Home/img/Cover.png";
import "./Video.css";
import LikeBtn from "../Video/img/like.png";
import DisLikeBtn from "../Video/img/dislike.png";
import ShareBtn from "../Video/img/share.png";

function Video() {
  const style = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <Header />

      <div className="video-section">
        <div>
          <iframe
            width="910"
            height="500"
            src="https://www.youtube.com/embed/Law7wfdg_ls"
            title="React Router"
          ></iframe>
          <h3>Dude You Re Getting A Telescope</h3>
          <div className="view-count">
            <p>123k views</p>
            <div className="btn-wrapper">
              <button className="like btn-profile">
                {<img src={LikeBtn} alt="Like" />}123k
              </button>
              <button className="dislike btn-profile">
                {<img src={DisLikeBtn} alt="DisLike" />}435k
              </button>
              <button className="share btn-profile">
                {<img src={ShareBtn} alt="Share" />}Share
              </button>
            </div>
          </div>
          <hr />
        </div>
        <div className="next-play">
          <h3>Next</h3>
          <ul className="next-play-list">
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
      </div>
    </div>
  );
}

export default Video;
