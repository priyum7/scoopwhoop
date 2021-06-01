import React from "react";
import "./MobileCard.css";

const generateTimefromNow = (timeDifference) => {
  let tempTime = Math.floor(timeDifference / 1000);
  if (tempTime <= 60)
    return `${tempTime} ${tempTime === 1 ? "second ago" : "seconds ago"}`;

  tempTime = Math.floor(tempTime / 60);
  if (tempTime <= 60)
    return `${tempTime} ${tempTime === 1 ? "minute ago" : "minutes ago"}`;

  tempTime = Math.floor(tempTime / 60);
  if (tempTime <= 60)
    return `${tempTime} ${tempTime === 1 ? "hour ago" : "hours ago"}`;

  tempTime = Math.floor(tempTime / 24);
  if (tempTime <= 30)
    return `${tempTime} ${tempTime === 1 ? "day ago" : "days ago"}`;

  tempTime = Math.floor(tempTime / 30);
  if (tempTime <= 12)
    return `${tempTime} ${tempTime === 1 ? "month ago" : "months ago"}`;

  tempTime = Math.floor(tempTime / 12);
  return `${tempTime} ${tempTime === 1 ? "year ago" : "years ago"}`;
};

const truncateNumbers = (value) => {
  if (value < 1000) return `${value}`;
  else return `${Math.ceil(value / 1000, 0)}K`;
};

const baseUrl = "https://www.scoopwhoop.com/";
const urlSuffix = "?ref=read_fresh";

function MobileCard(props) {
  return (
    <div className="mobile_card_outer">
      <div className="article_img">
        <a href={`${baseUrl}${props.articleUrl}${urlSuffix}`}>
          <img src={props.imagePath} alt="Article" />{" "}
        </a>
      </div>

      <div className="article_category">
        <a
          href={`${baseUrl}category/${props.category?.toLowerCase()}/${urlSuffix}`}
        >
          {props.category}
        </a>
      </div>

      <div className="article_shares_views">
        {`${truncateNumbers(props.shares)} ${
          props.shares === 1 ? "share" : "shares"
        } | ${truncateNumbers(props.views)} ${
          props.views === 1 ? "view" : "views"
        }`}
      </div>

      <div className="article_title">
        <a href={`${baseUrl}${props.articleUrl}${urlSuffix}`}>
          <h4>{props.title}</h4>
        </a>
      </div>
      <div className="article_author">
        <a href={`${baseUrl}author/${props.authorUrl}${urlSuffix}`}>
          {props.authorName}
        </a>
      </div>
      <div className="article_publishdate">
        {`${generateTimefromNow(props.publishTimefromNow)}`}
      </div>
    </div>
  );
}

export default React.memo(MobileCard);
