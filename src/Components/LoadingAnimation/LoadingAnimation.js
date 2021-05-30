import React from "react";
import "./LoadingAnimation.css";
import scoopwooplogo from "../../scoopwoop_logo.png";
function LoadingAnimation() {
  return (
    <div className="loading_animation_outer">
      <div className="loading_animation_inner">
        <img src={scoopwooplogo} alt="ScoopWoop Logo" />
        <span className="loading_label">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingAnimation;
