import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./Cards.css";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

function Cards() {
  const [articles, setArticles] = useState(undefined);

  useEffect(() => {
    fetch("https://www.scoopwhoop.com/api/v4/read/all/?offset=0&limit=8")
      .then((res) => res.json())
      .then((res) => {
        setArticles(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  console.log(articles);

  return (
    <>
      <div className="cards_grid">
        {articles &&
          articles.map((article) => (
            <Card
              key={article.article_id}
              category={article.category[0].toUpperCase()}
              imagePath={article.feature_img}
              title={article.title}
              authorName={article.auth_display.display_name}
              publishedDays={
                new Date().getDate() - new Date(article.pub_date).getDate() - 1
              }
              readTime={article.readtime}
              articleUrl={article.slug}
              authorUrl={article.auth_display.author_url}
            />
          ))}
      </div>
      <LoadingAnimation />
    </>
  );
}

export default Cards;
