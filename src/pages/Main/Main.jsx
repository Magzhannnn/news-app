import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import Container from "../../UI/Container/Container";
import NewBanner from "../../components/NewBanner/NewBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNews().then((res) => {
      setNews(res.news);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type="bunner" />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type="item" />
      )}
    </div>
  );
};

export default Main;
