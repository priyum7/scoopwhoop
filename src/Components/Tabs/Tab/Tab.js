import React from "react";
import "./Tab.css";

function Tab(props) {
  const clickHandler = (e) => {
    props.setSelectedTab(props.title);
  };

  return (
    <div
      className={`tab ${
        props.tabSelected === props.title ? "tab_selected" : ""
      }`}
      onClick={clickHandler}
    >
      {props.title}
    </div>
  );
}

export default Tab;
