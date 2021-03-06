import React from "react";
import "./MobileTopNavigation.css";
import scoopwhooplogo from "../../../scoopwhoop_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
function MobileTopNavigation() {
  return (
    <div className="mobile_top_navigation_outer">
      <span className="top_nav_item">
        <SearchIcon style={{ fontSize: "30px" }} />
      </span>

      <img src={scoopwhooplogo} alt="ScoopWhoop Logo"></img>
      <span className="top_nav_item">
        <MenuIcon style={{ fontSize: "30px" }} />
      </span>
    </div>
  );
}

export default MobileTopNavigation;
