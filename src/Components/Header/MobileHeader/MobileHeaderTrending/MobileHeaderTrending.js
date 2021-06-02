import React from "react";
import "./MobileHeaderTrending.css";
import TrendingCard from "./TrendingCard/TrendingCard";

function MobileHeaderTrending() {
  return (
    <div className="mobile_header_trending_outer">
      <TrendingCard
        imageUrl="https://image.scoopwhoop.com/w330/s3.scoopwhoop.com/anj2/60547185c8d1115b02424f3a/af7a268a-5287-45f3-b93d-cf50589ab517.jpg"
        category="entertainment"
        title="16 Fan Favourite Cult Movies That You Didn't Know Were Copied"
        articleUrl="https://www.scoopwhoop.com/category/entertainment/perception-changing-bollywood-films/?ref=read_widget"
      />
      <TrendingCard
        imageUrl="https://image.scoopwhoop.com/w330/s3.scoopwhoop.com/anj/pc/288686213.jpg"
        category="entertainment"
        title="18 Bollywood Movies Which Will Alter Your Perception Towards Life"
        articleUrl="https://www.scoopwhoop.com/category/entertainment/perception-changing-bollywood-films/?ref=read_widget"
      />
    </div>
  );
}

export default MobileHeaderTrending;
