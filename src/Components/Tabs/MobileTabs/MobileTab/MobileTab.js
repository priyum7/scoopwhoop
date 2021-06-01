import React from "react";
import "./MobileTab.css";

function MobileTab(props) {
  const isSelected = props.title === props.currentSelection;
  return (
    <div
      className={`mobile_tab_outer ${
        isSelected ? "mobile_tab_outer_selected" : null
      }`}
      onClick={() => {
        props.tabClickHandler(props.title);
      }}
    >
      <div
        className={`mobile_tab_inner ${
          isSelected ? "mobile_tab_inner_selected" : null
        }`}
      >
        {props.title}
      </div>
    </div>
  );
}

export default MobileTab;
