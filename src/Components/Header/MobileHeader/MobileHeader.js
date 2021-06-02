import React from "react";
import "./MobileHeader.css";
import MobileTopNavigation from "../../Navigation/MobileTopNavigation/MobileTopNavigation";
import MobileBottomNavigation from "../../Navigation/MobileBottomNavigation/MobileBottomNavigation";
import MobileHeaderTrending from "./MobileHeaderTrending/MobileHeaderTrending";
import MobileSpotlightNavigation from "../../Navigation/MobileSpotlightNavigation/MobileSpotlightNavigation";

function MobileHeader() {
  return (
    <>
      <div className="mobile_header_outer">
        <MobileTopNavigation />
        <MobileSpotlightNavigation />
        <MobileHeaderTrending />
      </div>
      <MobileBottomNavigation />
    </>
  );
}

export default MobileHeader;
