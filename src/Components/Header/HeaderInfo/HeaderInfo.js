import React from "react";
import "./HeaderInfo.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function HeaderInfo() {
  return (
    <div className="headerinfo_outer">
      <div className="headertile_category">ENTERTAINMENT</div>
      <div className="headertile_title">
        16 Fan Favourite Cult Movies That You Didn't Know Were Copied
      </div>
      <div className="headertile_readmore">
        <a href="https://www.scoopwhoop.com/entertainment/movies-that-were-copied/?ref=read_masthead">
          Read Article <ArrowForwardIcon />
        </a>
      </div>
    </div>
  );
}

export default HeaderInfo;
