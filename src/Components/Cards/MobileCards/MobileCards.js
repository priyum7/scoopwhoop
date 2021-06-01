import React, { useEffect, useState } from "react";
import MobileCard from "./MobileCard/MobileCard";
import "./MobileCards.css";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingAnimation from "../../LoadingAnimation/LoadingAnimation";

function MobileCards() {
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
    <InfiniteScroll
      dataLength={articles.length}
      next={loadMoreArticles}
      hasMore={true}
      loader={<LoadingAnimation mobile />}
      scrollThreshold={0.99}
    >
      <div className="mobile_cards_layout">
        {articles &&
          articles.map((article) => (
            <MobileCard
              key={article.article_id}
              category={article.category[0]?.toUpperCase()}
              imagePath={article.feature_img}
              title={article.title}
              authorName={article.auth_display.display_name}
              publishTimefromNow={new Date() - new Date(article.pub_date)}
              readTime={article.readtime}
              articleUrl={article.slug}
              authorUrl={article.auth_display.author_url}
              shares={article.analytics.shares}
              views={article.analytics.views}
            />
          ))}
      </div>
    </InfiniteScroll>
  );
}

export default MobileCards;
