import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import Container from "../../UI/Container/Container";
import NewBanner from "../../components/NewBanner/NewBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then((res) => {
      console.log(res.news);
      setNews(res.news);
    });
  }, []);

  return (
    <div className={styles.main}>
      {news.length > 0 && <NewBanner item={news[0]} />}
      <NewsList news={news} />
    </div>
  );
};

export default Main;
