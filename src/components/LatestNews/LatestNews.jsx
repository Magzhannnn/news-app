import React from "react";
import styles from "./LatestNews.module.css";
import BannersList from "../BannersList/BannersList";
import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../hooks/useFetch";

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={styles.section}>
      {<BannersList banners={data && data.news} isLoading={isLoading} />}
    </section>
  );
};

export default LatestNews;
