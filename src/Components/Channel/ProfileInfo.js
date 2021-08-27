import React from "react";
import { Link } from "react-router-dom";
import TopSectionVideo from "../Home/TopSectionVideo";

import "./ProfileInfo.css";
import ImagePro from "./img/Oval.png";
import BellIcon from "../../img/BellIcon";
import SearchIcon from "../Channel/img/Search.png";
import TextImage from "../Channel/img/Text.png";
import AliPhoto from "../Channel/img/Ali.png";

import LeftArrow from "../Home/img/LeftArrow";
import RightArrow from "../Home/img/RightArrow";

function ProfileInfo() {
  const style = {
    color: "white",
    textDecoration: "none",
    display: "flex",
  };

  return (
    <div className="profileinfo-wrapper">
      <div className="profile-info">
        <img src={ImagePro} alt="Profile" />
        <div>
          <h3>Margaret Phelps</h3>
          <p>245K subscribed</p>
        </div>
        <div className="profile-sub">
          <BellIcon />
          <button className="subscribe-button button-subs">
            Subscribe 2.3m
          </button>
        </div>
      </div>
      <div>
        <ul className="profile-links">
          <li className="profile-link-active">Home</li>
          <li>Videos</li>
          <li>Playlists</li>
          <li>Channels</li>
          <li>Discussion</li>
          <li>About</li>
          <li>
            <img src={SearchIcon} alt="Search" />
          </li>
        </ul>
        <div className="videoand-recomend">
          <Link style={style} to="/video">
            <div className="profilevideo-cover">
              <img src={TextImage} alt="Cover" width="400" height="180" />
              <div>
                <h2>
                  Choosing The Best Audio Player Software For Your Computer
                </h2>
                <p>
                  Your cheap internet-based banner advertising will become one
                  of the sought for ads there are. Today, the world of Internet
                  advertising is rapidly evolving beyond banner ads and
                  intrusive pop-ups. Bayles A common medium for advertising on
                  the Internet is the use of banner ads.
                </p>
              </div>
            </div>
          </Link>
          <div className="recommended">
            <h4>Recommended channel</h4>
            <ul>
              <Link style={style} to="/channel">
                <li className="recommend-item">
                  <img src={AliPhoto} alt="Cover" width="50" height="50" />
                  <h4>Flora Benson</h4>
                </li>
              </Link>
              <Link style={style} to="/channel">
                <li className="recommend-item">
                  <img src={AliPhoto} alt="Cover" width="50" height="50" />
                  <h4>Flora Benson</h4>
                </li>
              </Link>
              <Link style={style} to="/channel">
                <li className="recommend-item">
                  <img src={AliPhoto} alt="Cover" width="50" height="50" />
                  <h4>Flora Benson</h4>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="topsection bottom-video-channel">
          <Link style={style} to="/channel">
            <img src={ImagePro} width="50" height="50" alt="Channel" />
            <h3 className="channel-video-info">Margaret Phelps videos</h3>
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
    </div>
  );
}

export default ProfileInfo;
