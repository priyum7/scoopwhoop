import React, { useState } from "react";
import "./Tabs.css";
import Tab from "./Tab/Tab";

function Tabs() {
  const [isSelected, setIsSelected] = useState("Fresh");

  const clickHandler = (title) => {
    console.log(title);
    setIsSelected(title);
  };

  return (
    <div className="tabs_outer">
      <div className="tabs_inner">
        <Tab
          title="Fresh"
          setSelectedTab={clickHandler}
          tabSelected={isSelected}
        />
        <Tab
          title="Hot"
          setSelectedTab={clickHandler}
          tabSelected={isSelected}
        />
      </div>
    </div>
  );
}

export default Tabs;
