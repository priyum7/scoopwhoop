import React, { useState } from "react";
import "./MobileTabs.css";
import MobileTab from "./MobileTab/MobileTab";
function MobileTabs() {
  const [selectedTab, setSelectedTab] = useState("Fresh");

  const tabClickHandler = (title) => {
    setSelectedTab(title);
  };

  return (
    <div className="mobile_tabs_outer">
      <MobileTab
        title="Fresh"
        currentSelection={selectedTab}
        tabClickHandler={tabClickHandler}
      />
      <MobileTab
        title="Hot"
        currentSelection={selectedTab}
        tabClickHandler={tabClickHandler}
      />
    </div>
  );
}

export default MobileTabs;
