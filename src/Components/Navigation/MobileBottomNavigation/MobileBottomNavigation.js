import React, { useEffect, useState } from "react";
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

  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  console.log(scrollDir);

  return (
    <div
      className="mobile_bottom_navigation_outer"
      style={{
        transform: scrollDir === "up" ? `translateY(0vh)` : `translateY(100vh)`,
      }}
    >
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
