import React from "react";
import "./MobileHeader.css";
import MobileTopNavigation from "../../Navigation/MobileTopNavigation/MobileTopNavigation";
import MobileBottomNavigation from "../../Navigation/MobileBottomNavigation/MobileBottomNavigation";

function MobileHeader() {
  return (
    <>
      <div className="mobile_header_outer">
        <MobileTopNavigation />
      </div>
      <MobileBottomNavigation />
    </>
  );
}

export default MobileHeader;
