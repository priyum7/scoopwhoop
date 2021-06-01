import React from "react";
import "./MobileBottomNavigation.css";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SubjectOutlinedIcon from "@material-ui/icons/SubjectOutlined";
import RedeemOutlinedIcon from "@material-ui/icons/RedeemOutlined";
import MoodOutlinedIcon from "@material-ui/icons/MoodOutlined";

function MobileBottomNavigation() {
  const isSelected = {
    color: "yellow",
  };
  return (
    <div className="mobile_bottom_navigation_outer">
      <div className="mobile_bottom_navigation_item">
        <OfflineBoltIcon />
        <span className="bottom_navigation_text">TRENDING</span>
      </div>
      <div className="mobile_bottom_navigation_item">
        <PlayCircleOutlineIcon />
        <span className="bottom_navigation_text">VIDEOS</span>
      </div>
      <div className="mobile_bottom_navigation_item" style={isSelected}>
        <SubjectOutlinedIcon />
        <span className="bottom_navigation_text ">STORIES</span>
      </div>
      <div className="mobile_bottom_navigation_item">
        <RedeemOutlinedIcon />
        <span className="bottom_navigation_text">QUIZZES</span>
      </div>
      <div className="mobile_bottom_navigation_item">
        <MoodOutlinedIcon />
        <span className="bottom_navigation_text">MEMES</span>
      </div>
    </div>
  );
}

export default MobileBottomNavigation;
