import React from "react";
import "./TrendingCard.css";
function TrendingCard(props) {
  return (
    <div className="trending_card_outer">
      <a href={props.articleUrl}>
        <img src={props.imageUrl} alt="Article"></img>
      </a>

      <span className="card_category">
        <a
          href={`https://www.scoopwhoop.com/category/${props.category}/?ref=read_fresh`}
        >
          {props.category}
        </a>
      </span>

      <span className="card_title">
        <a href={props.articleUrl}>{props.title} </a>
      </span>

      <span className="card_article_link">
        {" "}
        <a href={props.articleUrl}>READ MORE </a>
      </span>
    </div>
  );
}

export default TrendingCard;
