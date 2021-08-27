import React from "react";
import "../Home/home.css";
import Header from "./Header";
import MainWrapper from "./MainWrapper";
import Sidebar from "./Sidebar";

function home() {
  return (
    <div>
      <Header />
      <div className="main-home-wrapper">
        <Sidebar />
        <MainWrapper />
      </div>
    </div>
  );
}

export default home;
