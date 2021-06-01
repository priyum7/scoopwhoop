import React from "react";
import "./LoadingAnimation.css";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import schoopwooplogo from "../../scoopwhoop_logo.png";
function LoadingAnimation(props) {
  return (
    <div className="loading_animation_outer">
      <div className="loading_animation_inner">
        <img src={schoopwooplogo} alt="ScoopWoop Logo" />
        <span className="loading_label">Loading...</span>
        {props.mobile && (
          <span className="TopRedirect">
            <KeyboardArrowUpOutlinedIcon />
          </span>
        )}
        {props.mobile && (
          <span className="Copyright">© 2021 ScoopWhoop Media Pvt. Ltd.</span>
        )}
      </div>
    </div>
  );
}

export default LoadingAnimation;
