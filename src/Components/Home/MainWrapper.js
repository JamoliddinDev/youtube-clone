import React from "react";
import "../Home/MainWrapper.css";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
function MainWrapper() {
  return (
    <div className="main-wrapper">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}

export default MainWrapper;
