import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./Cards.css";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import InfiniteScroll from "react-infinite-scroll-component";

function Cards() {
  const [articles, setArticles] = useState([]);
  const [totalPosts, setTotalPosts] = useState(12);

  const loadMoreArticles = () => {
    fetch(
      `https://www.scoopwhoop.com/api/v4/read/all/?offset=${totalPosts}&limit=8`
    )
      .then((res) => res.json())
      .then((res) => {
        setArticles(articles.concat(res.data));
        setTotalPosts(totalPosts + 8);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetch("https://www.scoopwhoop.com/api/v4/read/all/?offset=0&limit=12")
      .then((res) => res.json())
      .then((res) => {
        setArticles(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <div className="cards_container">
        <InfiniteScroll
          dataLength={articles.length}
          next={loadMoreArticles}
          hasMore={true}
          loader={<LoadingAnimation />}
          scrollThreshold={"10px"}
        >
          <div className="cards_grid">
            {articles &&
              articles.map((article) => (
                <Card
                  key={article.article_id}
                  category={article.category[0]?.toUpperCase()}
                  imagePath={article.feature_img}
                  title={article.title}
                  authorName={article.auth_display.display_name}
                  publishedDays={
                    new Date().getDate() - new Date(article.pub_date).getDate()
                  }
                  readTime={article.readtime}
                  articleUrl={article.slug}
                  authorUrl={article.auth_display.author_url}
                />
              ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Cards;
