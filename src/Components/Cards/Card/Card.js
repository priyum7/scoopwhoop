import React from "react";
import "./Card.css";

const getDateSuffix = (publishedDays) => {
  console.log(publishedDays);
  if (publishedDays === 1) return `${publishedDays} day ago `;
  else if (publishedDays <= 6) return `${publishedDays} days ago `;
  else if (publishedDays < 14)
    return `${Math.floor(publishedDays / 7)} week ago `;
  else if (publishedDays < 30)
    return `${Math.floor(publishedDays / 7)} weeks ago `;
  else if (publishedDays < 60)
    return `${Math.floor(publishedDays / 30)} month ago `;
  else return `${Math.floor(publishedDays / 30)} months ago `;
};

const baseUrl = "https://www.scoopwhoop.com/";
const urlSuffix = "?ref=read_fresh";

function Card(props) {
  return (
    <div className="card_outer">
      <div className="article_img">
        <a href={`${baseUrl}${props.articleUrl}${urlSuffix}`}>
          <img src={props.imagePath} alt="Article" />{" "}
        </a>
      </div>
      <div className="article_category">
        <a
          href={`${baseUrl}category/${props.category.toLowerCase()}/${urlSuffix}`}
        >
          {props.category}
        </a>
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
      <div className="article_publishdate_readtime">{`${getDateSuffix(
        props.publishedDays
      )}  | 
      ${props.readTime}`}</div>
    </div>
  );
}

export default React.memo(Card);
