import React from "react";
import Header from "../Home/Header";
import Sidebar from "../Home/Sidebar";
import "../Channel/Channel.css";
import HeaderCover from "../../img/headerCover.png";
import ProfileInfo from "./ProfileInfo";

function Channel() {
  return (
    <div>
      <Header />
      <div className="channel-sidebar">
        <Sidebar />
        <div>
          <div className="channel-top-header">
            <img src={HeaderCover} alt="Cover" width="1035" height="200" />
          </div>
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
}

export default Channel;
